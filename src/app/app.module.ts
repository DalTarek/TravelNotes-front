import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
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
import { HttpClientModule} from '@angular/common/http';

import { APP_ROUTES } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TravelComponent } from './travel/travel.component';
import { CardComponent } from './shared/card/card.component';
import { DialogComponent } from './shared/dialog/dialog.component';
import { FormComponent } from './shared/form/form.component';
import { TravelsComponent } from './travels/travels.component';
import { UpdateComponent } from './update/update.component';
import { NaPipe } from './shared/pipes/na.pipe';
import { BadgeDirective } from './shared/directives/badge.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TravelComponent,
    CardComponent,
    DialogComponent,
    FormComponent,
    TravelsComponent,
    UpdateComponent,
    NaPipe,
    BadgeDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCheckboxModule,
    MatDialogModule,
    MatInputModule,
    HttpClientModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
