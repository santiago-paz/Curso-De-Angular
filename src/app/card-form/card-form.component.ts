import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../interfaces/card';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent {

  @Output()
  addCardButtonClick: EventEmitter<Card> = new EventEmitter()

  @Input()
  newCard: Card = {
    title: '',
    secondaryTitle: '',
    resourceUrl: '',
    supportingText: '',
  };

  onAddCardButtonClick() {
    this.addCardButtonClick.emit(this.newCard)
  }
}
