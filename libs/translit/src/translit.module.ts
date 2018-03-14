import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslitDirective } from './translit/translit.directive';
import { LIT_CONFIG, TranslitConfig } from './model/translit.config';
import { Observable } from 'rxjs/Observable';
import { TranslitEditDirective } from './edit/translit-edit.directive';
import { TranslitInputComponent } from './edit/input/translit-input.component';
import { TranslitEditHighlightComponent } from "./edit/highlight/translit-edit-highlight.component";

@NgModule({
  imports: [CommonModule],
  declarations: [
    TranslitDirective,
    TranslitEditDirective,
    TranslitEditHighlightComponent,
    TranslitInputComponent,
  ],
  exports: [
    TranslitDirective,
    TranslitInputComponent,
    TranslitEditHighlightComponent,
    TranslitEditDirective,
  ],
  entryComponents: [
    TranslitInputComponent,
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
