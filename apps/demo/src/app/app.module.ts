import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {TranslitModule} from 'translit';
import {of} from 'rxjs/observable/of';

import {AppComponent} from './app.component';
import {AnotherComponent} from "./another.component";

@NgModule({
  imports: [
    BrowserModule,
    TranslitModule.forRoot(of({'translations': {'foo': 'bar', 'bar': 'foo'}})),
  ],
  declarations: [AppComponent, AnotherComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
}
