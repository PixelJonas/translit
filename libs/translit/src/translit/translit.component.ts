import { Component, Input } from '@angular/core';

@Component({
  selector: 'lit-it',
  template: `<span style="background-color: yellow">{{text}}</span>`
})
export class TranslitComponent {
  @Input() text: string;
}
