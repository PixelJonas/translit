import { Directive, ElementRef, Inject, Input, OnInit } from '@angular/core';
import { LIT_CONFIG, TranslitConfig } from "../model/translit.config";
import { Observable } from "rxjs/Observable";

@Directive({
  selector: '[litTranslate]',
})
export class TranslitDirective implements OnInit {
  private keys: string[];

  constructor(private el: ElementRef, @Inject(LIT_CONFIG) private config: Observable<TranslitConfig>) {
  }

  @Input()
  set litTranslate(value: string[] | string) {
    this.keys = this.convert(value);
    console.log('keys: ', this.keys);
  }

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = 'blue';
    this.config.subscribe((conf) => {
      if (conf) {
        //Object.keys(conf.translations).forEach((key) => console.log(key));
      }
    })
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


