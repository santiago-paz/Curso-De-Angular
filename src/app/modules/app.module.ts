import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { CardFormComponent } from '../components/card-form/card-form.component';
import { CardComponent } from '../components/card/card.component';
import { CardsViewComponent } from '../views/cards-view/cards-view.component';
import { PlanetsViewComponent } from '../views/planets-view/planets-view.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { AddCardViewComponent } from '../views/add-card-view/add-card-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardFormComponent,
    CardsViewComponent,
    PlanetsViewComponent,
    AddCardViewComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
