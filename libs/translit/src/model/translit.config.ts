import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export interface TranslitConfig {
  selectedLanguage: string;
  translations: { [key: string]: string | object };
}

export const LIT_CONFIG = new InjectionToken<Observable<TranslitConfig>>('lit.config');
