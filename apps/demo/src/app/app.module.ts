import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslitConfig, TranslitModule } from 'translit';
import { of } from 'rxjs/observable/of';

import { AppComponent } from './app.component';
import { AnotherComponent } from './another.component';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { ADMIN_SUBJECT } from "./constants";

const admin$ = new BehaviorSubject<boolean>(false)
const config$ = new BehaviorSubject({
  selectedLanguage: 'de',
  translations: {
    de: {
      'foo': 'bar',
      'bar': 'foo',
      'card.first.title': 'Florian ist doof! He really is!',
    },
  },
  isEditable: admin$,
  style: {
    tooltipText: 'change dis!',
  },
});

@NgModule({
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    TranslitModule.forRoot(config$),
  ],
  declarations: [AppComponent, AnotherComponent],
  bootstrap: [AppComponent],
  providers: [
    {provide: ADMIN_SUBJECT, useValue: admin$},
  ],
})
export class AppModule {
}
