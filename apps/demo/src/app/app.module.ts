import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslitConfig, TranslitModule } from 'translit';
import { of } from 'rxjs/observable/of';

import { AppComponent } from './app.component';
import { AnotherComponent } from './another.component';

const translitConfig: TranslitConfig = {
  selectedLanguage: 'de',
  translations: {foo: 'bar', bar: 'foo'},
  isEditable: of(true),
  style: {
    tooltipText: 'change dis!'
  }
};

@NgModule({
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    TranslitModule.forRoot(of(translitConfig)),
  ],
  declarations: [AppComponent, AnotherComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
}
