import {
  AfterViewInit,
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  Inject,
  Injector,
  Input,
} from '@angular/core';
import { LIT_CONFIG, TranslitConfig } from "../model/translit.config";
import { Observable } from "rxjs/Observable";
import { HighlightDirectiveComponent } from "./highlight.directive";

@Directive({
  selector: '[litTranslate]',
})
export class TranslitDirective implements AfterViewInit {
  private keys: string[];

  constructor(@Inject(LIT_CONFIG) private config: Observable<TranslitConfig>,
              private element: ElementRef,
              private injector: Injector,
              private factoryResolver: ComponentFactoryResolver) {
  }

  @Input()
  set litTranslate(value: string[] | string) {
    this.keys = this.convert(value);
    console.log('keys: ', this.keys);
  }

  ngAfterViewInit() {
    const factory = this.factoryResolver.resolveComponentFactory(HighlightDirectiveComponent);
    const componentRef = factory.create(this.injector);
    const view = componentRef.hostView;
    const nodes: NodeList = this.element.nativeElement.childNodes;
    console.log(this.element.nativeElement.childNodes);
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


