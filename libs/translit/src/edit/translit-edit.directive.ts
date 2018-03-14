import {
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  HostListener,
  Injector,
  ViewContainerRef,
  ViewRef
} from '@angular/core';
import { TranslitInputComponent } from './input/translit-input.component';

@Directive({
  selector: '[litEdit]'
})
export class TranslitEditDirective {
  private inputVie: ViewRef;

  constructor(
    private element: ElementRef,
    private viewContainer: ViewContainerRef,
    private injector: Injector,
    private factoryResolver: ComponentFactoryResolver
  ) {}

  @HostListener('mouseover')
  onHover() {
    if (!this.inputVie) {
      const factory = this.factoryResolver.resolveComponentFactory(TranslitInputComponent);
      const componentRef = factory.create(this.injector);
      componentRef.instance.translationKey = 'florian.ist.doof';
      componentRef.instance.cancel.subscribe(() => {
        this.inputVie.destroy();
        this.inputVie = null;
      });
      const view = componentRef.hostView;
      this.inputVie = this.viewContainer.insert(view);
    }
  }
}
