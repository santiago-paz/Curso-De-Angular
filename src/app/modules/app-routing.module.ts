import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsViewComponent } from '../views/cards-view/cards-view.component';
import { PlanetsViewComponent } from '../views/planets-view/planets-view.component';
import { AddCardViewComponent } from '../views/add-card-view/add-card-view.component';
import { AdminViewComponent } from '../views/admin-view/admin-view.component';
import { authGuard } from '../auth/auth.guard';
import { LoginViewComponent } from '../views/login-view/login-view.component';

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
    path: 'cards/add',
    component: AddCardViewComponent,
  },
  {
    path: 'planets',
    component: PlanetsViewComponent,
  },
  {
    path: 'admin',
    component: AdminViewComponent,
    canActivate: [authGuard]
  },
  {
    path: 'login',
    component: LoginViewComponent,
  },
  {
    path: '**',
    redirectTo: 'cards',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
