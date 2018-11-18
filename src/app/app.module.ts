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

import { APP_ROUTES } from './app-routing.module';


@NgModule({
  declarations: [
    TravelComponent
  ],
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
    MatInputModule
  ],
  providers: [],
  bootstrap: [TravelComponent],
})
export class AppModule { }
