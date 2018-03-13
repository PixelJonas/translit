import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[lit-translate]'
})
export class TranslitDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'blue';
  }
}
