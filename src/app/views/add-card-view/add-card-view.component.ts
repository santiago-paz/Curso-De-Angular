import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/app/interfaces/card';

@Component({
  selector: 'app-add-card-view',
  templateUrl: './add-card-view.component.html',
  styleUrls: ['./add-card-view.component.css'],
})
export class AddCardViewComponent {
  constructor(private router: Router) {}
  onAddCardButtonClick(card: Card) {
    this.router.navigate([''], { queryParams: { title: card.title } });
  }
}
