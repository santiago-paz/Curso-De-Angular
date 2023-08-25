import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardFormComponent } from 'src/app/components/card-form/card-form.component';
import { Card } from '../../interfaces/card';
import { CardsService } from '../../services/cards.service';

@Component({
  selector: 'app-cards-view',
  templateUrl: './cards-view.component.html',
  styleUrls: ['./cards-view.component.css'],
})
export class CardsViewComponent implements OnInit {
  constructor(private cardsService: CardsService, public dialog: MatDialog) {}

  loadingCards: boolean = true;
  cards: Array<Card> = [];
  newCard: Card = {
    title: '',
    secondaryTitle: '',
    resourceUrl: '',
    supportingText: '',
  };

  ngOnInit(): void {
    this.cardsService.getCards().subscribe((response) => {
      this.loadingCards = false;
      this.cards = response;
    });
  }

  onAddCardButtonClick() {
    const dialogRef = this.dialog.open(CardFormComponent, {
      data: this.newCard,
    });
    dialogRef.afterClosed().subscribe(result => {
      this.cards.unshift(result)
    });
  }
}
