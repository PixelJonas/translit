import {
  AfterViewChecked,
  ChangeDetectorRef,
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  Inject,
  Input,
  Renderer2,
  ViewContainerRef
} from '@angular/core';
import {LIT_CONFIG, TranslitConfig} from '../model/translit.config';
import {Observable} from 'rxjs/Observable';
import {TranslitComponent} from './translit.component';
import {isNullOrUndefined} from 'util';

@Directive({
  selector: '[litTranslate]'
})
export class TranslitDirective implements AfterViewChecked {

  private keys: string[];

  constructor(@Inject(LIT_CONFIG) private config: Observable<TranslitConfig>,
              private viewContainerRef: ViewContainerRef,
              private resolver: ComponentFactoryResolver,
              private elementRef: ElementRef,
              private renderer: Renderer2,
              private changeDetector: ChangeDetectorRef) {
  }

  @Input()
  set litTranslate(value: string[] | string) {
    this.keys = this.convert(value);
  }

  ngAfterViewChecked(): void {
    const detectChanges = this.process(this.elementRef.nativeElement);
    if (detectChanges) {
      this.changeDetector.detectChanges();
    }
  }

  process(node: any): boolean {
    return this.textNode(node)
      ? this.processNode(node)
      : this.processNodesOf(node);
  }

  processNodesOf(node: any): boolean {
    return this.nodeListOf(node)
      .filter(n => !this.alreadyProcessed(n))
      .map(n => this.process(n))
      .reduce((prev, cur) => prev || cur, false);
  }

  processNode(node: any): boolean {
    const text = this.getContent(node).trim();
    if (text !== '') {
      const key = this.keys.find(value => text.indexOf(value) >= 0);
      if (key) {
        console.log('Found ', key);
        const litComponentFactory = this.resolver.resolveComponentFactory(TranslitComponent);
        const litComponentRef = this.viewContainerRef.createComponent(litComponentFactory);

        litComponentRef.instance.text = text;
        litComponentRef.location.nativeElement.data = {lit: true};

        const parent = this.renderer.parentNode(node);
        const next = this.renderer.nextSibling(node);

        console.log(parent);
        console.log(this.renderer.parentNode(parent));

        this.renderer.insertBefore(parent, litComponentRef.location.nativeElement, next);
        this.renderer.removeChild(parent, node);
        return true;
      }
    }
    return false;
  }

  nodeListOf(node: Node): Node[] {
    const nodeList = [];
    if (node && node.childNodes && node.childNodes.length) {
      for (let i = 0; i < node.childNodes.length; ++i) {
        nodeList.push(node.childNodes[i]);
      }
    }
    return nodeList;
  }

  alreadyProcessed(node: any): boolean {
    return node && node.data && node.data['lit'];
  }

  textNode(node: any): boolean {
    return node && node.nodeType === 3
  }

  getContent(node: any): string {
    return !isNullOrUndefined(node.textContent) ? node.textContent : node.data;
  }

  convert(input: string | string[]): string[] {
    if (typeof input === 'string') {
      return [input];
    } else if (input instanceof Array) {
      return [...input];
    }
    return [];
  }
}
