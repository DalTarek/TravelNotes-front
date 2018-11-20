import { Routes, RouterModule } from '@angular/router';
import { TravelComponent } from './travel/travel.component';
import { TravelsComponent } from './travels/travels.component';
import { HomeComponent } from './home/home.component';

const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'travels', component: TravelsComponent },
  { path: 'travel/:id', component: TravelComponent }
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES, { useHash: true });