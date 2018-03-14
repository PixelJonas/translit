import {
  AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Inject, Input, Output,
  ViewChild,
} from '@angular/core';
import { Translation } from '../../model/translation';
import { KEY_CODES } from '../../model/keycode';
import { LIT_CONFIG, TranslitConfig } from '../../model/translit.config';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'lit-input',
  templateUrl: './translit-input.component.html'
})
export class TranslitInputComponent implements AfterViewInit {
  @Output() cancel = new EventEmitter();

  @Output() submit = new EventEmitter<Translation>();

  @Input() translationKey: string;

  @Input() text: string;

  private language: string;

  @ViewChild('translation') private translation: ElementRef;

  constructor(@Inject(LIT_CONFIG) private config: Observable<TranslitConfig>) {
    config.subscribe(resolvedConfig => (this.language = resolvedConfig.selectedLanguage));
  }

  ngAfterViewInit(){
    this.translation.nativeElement.focus();
  }

  @HostListener('document:keydown', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    if ((event.altKey || event.ctrlKey) && event.keyCode === KEY_CODES.ENTER) {
      this.submit.emit(this.createTranslation());
    } else if (event.keyCode === KEY_CODES.ESCAPE) {
      this.cancel.emit();
    }
  }

  private createTranslation(): Translation {
    const translationObj = {};
    translationObj[this.translationKey] = this.translation.nativeElement.value;
    const transObj = {};
    transObj[this.language] = translationObj;
    return transObj;
  }
}
