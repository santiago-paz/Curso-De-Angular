import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../app.component';
import { CardFormComponent } from '../components/card-form/card-form.component';
import { CardComponent } from '../components/card/card.component';
import { CardsViewComponent } from '../views/cards-view/cards-view.component';
import { PlanetsViewComponent } from '../views/planets-view/planets-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardFormComponent,
    CardsViewComponent,
    PlanetsViewComponent,
  ],
  imports: [FormsModule, BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
