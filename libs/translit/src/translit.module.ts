import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslitDirective } from './translit/translit.directive';
import { LIT_CONFIG, TranslitConfig } from "./model/translit.config";
import { Observable } from "rxjs/Observable";

@NgModule({
  imports: [CommonModule],
  declarations: [TranslitDirective],
  exports: [TranslitDirective],
})
export class TranslitModule {

  static forRoot(config: Observable<TranslitConfig>): ModuleWithProviders {
    return {
      ngModule: TranslitModule,
      providers: [
        {
          provide: LIT_CONFIG,
          useValue: config,
        },
      ],
    }
  }
}
