import { Component, EventEmitter, Inject, Input, OnInit, Output } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Translation } from "../model/translation";
import { LIT_CONFIG, TranslitConfig } from "../model/translit.config";
import "rxjs/add/operator/switchMap";
import { map, switchMap } from "rxjs/operators";

@Component({
  selector: 'lit-split',
  templateUrl: './translit-splitter.component.html',
})
export class TranslitSplitterComponent implements OnInit {
  @Input() text: string;
  @Input() translationKeys: string[];

  text$: Observable<string[]>;

  @Output() translation = new EventEmitter<Translation>();

  constructor(@Inject(LIT_CONFIG) private config$: Observable<TranslitConfig>) {
  }

  ngOnInit() {

    this.text$ = this.config$.pipe(
      switchMap((resolvedConfig: TranslitConfig) => {
        return resolvedConfig.isEditable.pipe(
          map((isEdtiable: boolean) => {
            return this.extract(this.text, this.translationKeys, resolvedConfig.translations[resolvedConfig.selectedLanguage], isEdtiable);
          }),
        )
      }),
    );
  }

  onTranslation(translatedText: Translation) {
    this.translation.emit(translatedText);
  }

  isString(input: any) {
    return typeof input === 'string';
  }

  extract(value: string, keys: string[], translations: { [key: string]: string }, isEditable = false): string[] {
    const bar = [];
    let textToFuck = '' + value;
    keys.forEach((key) => {
      const index = textToFuck.indexOf(key);

      bar.push(textToFuck.substring(0, index));

      let translated = translations[textToFuck.substr(index, key.length)];
      translated = translated ? translated : key;

      isEditable ? bar.push({key, text: translated}) : bar.push(translated);
      textToFuck = textToFuck.substring(index + key.length, textToFuck.length);
    });
    return bar;
  }
}
