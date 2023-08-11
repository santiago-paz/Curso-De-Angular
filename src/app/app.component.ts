import { Component } from '@angular/core';
import { Card } from './interfaces/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nombre = 'Santiago';
  newCard: Card = {
    title: '',
    secondaryTitle: '',
    resourceUrl: '',
    supportingText: '',
  };
  cards: Array<Card> = [
    {
      title: 'Titulo 1',
      secondaryTitle: 'Titulo Secundario 1',
      resourceUrl: '/assets/card_img_placeholder.svg',
      supportingText: 'Texto de Soporte 1',
    },
    {
      title: 'Titulo 2',
      secondaryTitle: 'Titulo Secundario 2',
      resourceUrl: '/assets/card_img_placeholder.svg',
      supportingText: 'Texto de Soporte 2',
    },
    {
      title: 'Titulo 3',
      secondaryTitle: 'Titulo Secundario 3',
      resourceUrl: '/assets/card_img_placeholder.svg',
      supportingText: 'Texto de Soporte 3',
    },
    {
      title: 'Titulo 4',
      secondaryTitle: 'Titulo Secundario 4',
      resourceUrl: '/assets/card_img_placeholder.svg',
      supportingText: 'Texto de Soporte 4',
    },
  ];

  onButtonClick() {
    this.nombre = 'Ana';
  }

  onAddCardButtonClick() {
    this.cards.push(this.newCard);
    this.newCard = {
      title: '',
      secondaryTitle: '',
      resourceUrl: '',
      supportingText: '',
    };
  }
}
