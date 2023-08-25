import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Card } from '../../interfaces/card';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css'],
})
export class CardFormComponent {
  constructor(
    public dialogRef: MatDialogRef<CardFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Card
  ) {}
}
