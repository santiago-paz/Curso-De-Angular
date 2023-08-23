import { Component, EventEmitter, Output } from '@angular/core';
import { Card } from '../../interfaces/card';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent {
  @Output()
  private addCardButtonClick: EventEmitter<Card> = new EventEmitter()

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
