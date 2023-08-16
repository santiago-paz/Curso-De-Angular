import { Component, OnInit } from '@angular/core';
import { Card } from './interfaces/card';
import { CardsService } from './cards.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private cardsService: CardsService) {}

  nombre = 'Santiago';
  loadingCards: boolean = true;
  cards: Array<Card> = [];

  ngOnInit() {
    this.cardsService
      .getCards()
      .pipe(delay(2000))
      .subscribe((response) => {
        this.cards = response;
        this.loadingCards = false;
      });
  }

  onButtonClick() {
    this.nombre = 'Ana';
  }

  onAddCardButtonClick(card: Card) {
    this.cards.push(card);
  }
}
