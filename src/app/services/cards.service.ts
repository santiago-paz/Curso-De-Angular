import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Card } from '../interfaces/card';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  constructor() {}

  getCards(): Observable<Array<Card>> {
    return of([
      {
        title: 'Titulo 1',
        secondaryTitle: 'Titulo Secundario 1',
        resourceUrl: '/assets/cat1.jpeg',
        supportingText: 'Texto de Soporte 1',
      },
      {
        title: 'Titulo 2',
        secondaryTitle: 'Titulo Secundario 2',
        resourceUrl: '/assets/cat2.jpeg',
        supportingText: 'Texto de Soporte 2',
      },
      {
        title: 'Titulo 3 Tercer elemento',
        secondaryTitle: 'Titulo Secundario 3',
        resourceUrl: '/assets/cat3.jpeg',
        supportingText: 'Texto de Soporte 3',
      },
    ]);
  }
}
