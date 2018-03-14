import {Component, Input} from '@angular/core';

@Component({
  selector: 'lit-it',
  template: `<span class="lit-text">{{text}}</span>`
})
export class TranslitComponent {

  @Input() text: string;
}
