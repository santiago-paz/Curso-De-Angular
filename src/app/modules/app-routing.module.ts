import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsViewComponent } from '../views/cards-view/cards-view.component';
import { PlanetsViewComponent } from '../views/planets-view/planets-view.component';

const routes: Routes = [
  {
    path: '',
    component: CardsViewComponent,
  },
  {
    path: 'cards',
    component: CardsViewComponent,
  },
  {
    path: 'planets',
    component: PlanetsViewComponent,
  },
  {
    path: '**',
    redirectTo: 'cards',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
