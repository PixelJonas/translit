import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export interface TranslitConfig {
  selectedLanguage: string;
  isEditable?: Observable<boolean>;
  translations: { [key: string]: string | object };
  style?: {
    tooltipText?: string;
  }
}

export const LIT_CONFIG = new InjectionToken<Observable<TranslitConfig>>('lit.config');
