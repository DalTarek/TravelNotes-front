import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TravelsComponent } from './travels/travels.component';
import { TravelComponent } from './travel/travel.component';
import {UpdateComponent} from './update/update.component';

const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'travels', component: TravelsComponent },
  { path: 'edit/:id', component: UpdateComponent },
  { path: 'travel/:id', component: TravelComponent }
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES, { useHash: true });
