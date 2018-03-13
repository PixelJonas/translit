import { Directive, ElementRef, Inject } from '@angular/core';
import { LIT_CONFIG, TranslitConfig } from "../model/translit.config";
import { Observable } from "rxjs/Observable";

@Directive({
  selector: '[lit-translate]'
})
export class TranslitDirective {

  constructor(el: ElementRef, @Inject(LIT_CONFIG) private config: Observable<TranslitConfig>) {
    el.nativeElement.style.backgroundColor = 'blue';
    config.subscribe((conf) => {
      if(conf){
        Object.keys(conf).forEach((key) => console.log(key));
      }
    })
  }

}
