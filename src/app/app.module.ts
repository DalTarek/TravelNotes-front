import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatToolbarModule
} from '@angular/material';
import { TravelComponent } from './travel/travel.component';
import { TravelsComponent } from './travels/travels.component';

import { APP_ROUTES } from './app.routes';
import {AppComponent} from './app.component';
import {CardComponent} from './shared/card/card.component';
import {DialogComponent} from './shared/dialog/dialog.component';
import {HomeComponent} from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TravelComponent,
    TravelsComponent,
    CardComponent,
    DialogComponent
  ],
  entryComponents: [ DialogComponent ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCheckboxModule,
    MatDialogModule,
    MatInputModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
