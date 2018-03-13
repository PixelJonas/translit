import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslitDirective } from './translit/translit.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [TranslitDirective],
  exports: [TranslitDirective]
})
export class TranslitModule {}
