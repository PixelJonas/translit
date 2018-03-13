import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslitModule } from 'translit';
import { of } from 'rxjs/observable/of';

import { AppComponent } from './app.component';
import { AnotherComponent } from './another.component';

@NgModule({
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    TranslitModule.forRoot(of({ selectedLanguage: 'de', translations: { foo: 'bar', bar: 'foo' } }))
  ],
  declarations: [AppComponent, AnotherComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
