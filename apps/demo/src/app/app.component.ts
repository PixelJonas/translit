import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  keys = [
    'card.first.title',
    'card.first.text',
    'card.first.button',
    'card.second.title',
    'card.second.text',
    'card.second.button',
    'card.third.title',
    'card.third.text',
    'card.third.button',
    'app.title',
    'app.nav.home',
    'app.nav.about',
    'app.nav.search',
    'app.home.headline',
    'app.home.subheadline',

  ];

  firstCardText = "Some quick example text to build on card.first.title and make up the bulk of the card's card.first.text .";

  ngOnInit() {
    setTimeout(() => this.firstCardText = "The text of card.first.title just changed after a timeout. But we still reference card.first.text", 5000);
  }

  onTranslation(event) {
    console.log(event);
  }
}
