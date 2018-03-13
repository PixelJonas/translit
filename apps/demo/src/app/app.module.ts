import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

import { TranslitModule } from 'translit';

@NgModule({
  imports: [BrowserModule, TranslitModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
