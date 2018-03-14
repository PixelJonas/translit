import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public arrayKeys = ['arrayFoo', 'arrayBar'];
  firstCardText = "Some quick example text to build on card.first.title and make up the bulk of the card's card.first.text .";
  constructor() {
  }

  ngOnInit() {
    setTimeout(() => this.firstCardText = "The text of card.first.title just changed after a timeout. But we still reference card.first.text", 5000);
  }
}
