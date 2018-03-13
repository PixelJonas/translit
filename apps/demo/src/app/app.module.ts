import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

import { TranslitModule } from 'translit';
import { of } from 'rxjs/observable/of';

@NgModule({
  imports: [
    BrowserModule,
    TranslitModule.forRoot(of({'foo': 'bar', 'bar': 'foo'}))
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
