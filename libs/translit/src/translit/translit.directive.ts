import {
  AfterViewChecked, ChangeDetectorRef,
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  Inject,
  Input,
  Renderer2,
  ViewContainerRef
} from '@angular/core';
import { LIT_CONFIG, TranslitConfig } from '../model/translit.config';
import { Observable } from 'rxjs/Observable';
import { TranslitComponent } from './translit.component';
import { isNullOrUndefined } from 'util';

@Directive({
  selector: '[litTranslate]'
})
export class TranslitDirective implements AfterViewChecked {
  private keys: string[];
  private managed: any[] = [];


  constructor(@Inject(LIT_CONFIG) private config: Observable<TranslitConfig>,
              private viewContainerRef: ViewContainerRef,
              private resolver: ComponentFactoryResolver,
              private elementRef: ElementRef,
              private renderer: Renderer2,
              private cd: ChangeDetectorRef) {
  }

  @Input()
  set litTranslate(value: string[] | string) {
    this.keys = this.convert(value);
  }

  ngAfterViewChecked(): void {
    const checkAgain = this.processNodesOf(this.elementRef.nativeElement);
    if (checkAgain) {
      this.cd.detectChanges();
    }
  }

  processNodesOf(node: any): boolean {
    let check = false;
    const nodes: NodeList = node.childNodes;
    if (!nodes || !nodes.length) {
      return check
    }
    for (let i = 0; i < nodes.length; ++i) {
      const sibling: any = nodes[i];
      if (sibling.data && sibling.data['lit']) {
        console.log('already lit');
        continue;
      }
      if (sibling.nodeType === 3) { // node type 3 is a text node
        check = check || this.processNode(sibling);
      }
      else {
        this.processNodesOf(sibling);
      }
    }
    return check;
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
        litComponentRef.location.nativeElement.data = { lit: true };

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
