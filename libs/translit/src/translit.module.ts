import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslitDirective } from './translit/translit.directive';
import { LIT_CONFIG, TranslitConfig } from './model/translit.config';
import { Observable } from 'rxjs/Observable';
import { TranslitEditHighlightComponent } from "./edit/highlight/translit-edit-highlight.component";
import { TranslitSimpleInputComponent } from "./edit/input/simple/translit-simple-input.component";

@NgModule({
  imports: [CommonModule],
  declarations: [
    TranslitDirective,
    TranslitEditHighlightComponent,
    TranslitSimpleInputComponent,
  ],
  exports: [
    TranslitDirective,
    TranslitSimpleInputComponent,
    TranslitEditHighlightComponent,
  ],
  entryComponents: [
    TranslitSimpleInputComponent,
    TranslitEditHighlightComponent,
  ],
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
    };
  }
}
