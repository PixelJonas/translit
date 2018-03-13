import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-another-component',
  template: `{{text}}`
})
export class AnotherComponent implements OnInit {
  text = 'Working hard ....';

  ngOnInit(): void {
    this.text = 'text.to.replace.3';
    //setTimeout(() => {
    //  this.text = "text.to.replace.3";
    //}, 1500);
  }
}
