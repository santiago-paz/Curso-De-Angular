import { Component, OnInit } from '@angular/core';
import { Card } from './interfaces/card';
import { delay } from 'rxjs';
import { CardsService } from './services/cards.service';
import { PlanetService } from './services/planet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private cardsService: CardsService,
    private planetService: PlanetService
  ) {}

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

    this.planetService.getPlanet(1).subscribe((planet) => {
      console.log(planet);
    });
  }

  onAddCardButtonClick(card: Card) {
    this.cards.push(card);
  }
}
