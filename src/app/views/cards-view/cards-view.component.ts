import { Component, OnInit } from '@angular/core';
import { Card } from '../../interfaces/card';
import { CardsService } from '../../services/cards.service';
import { SwapiService } from '../../services/swapi.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-cards-view',
  templateUrl: './cards-view.component.html',
  styleUrls: ['./cards-view.component.css'],
})
export class CardsViewComponent implements OnInit {
  constructor(
    private cardsService: CardsService,
    private swapiService: SwapiService
  ) {}

  loadingCards: boolean = true;
  cards: Array<Card> = [];

  ngOnInit(): void {
    this.cardsService
      .getCards()
      .subscribe((response) => {
        this.loadingCards = false;
        this.cards = response;
        /* this.swapiService.getPlanet(1).subscribe((value) => {
          this.cards.push({
            title: value.name,
            secondaryTitle: value.created,
            supportingText: value.gravity,
            resourceUrl: 'assets/planet1.webp',
          });
        }); */
      });
  }
}
