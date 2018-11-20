import { Component, OnInit } from '@angular/core';
import { filter, flatMap, tap } from 'rxjs/operators';
import { TravelsService } from '../shared/services/travels.service';
import { ActivatedRoute } from '@angular/router';
import {Travel} from '../shared/interfaces/travel';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: [ './travel.component.css' ]
})
export class TravelComponent implements OnInit {
  // private property to store travel value
  private _travel: Travel;
  // private property to store flag to know if it's a travel
  private _isTravel: boolean;

  /**
   * Component constructor
   */
  constructor(private _travelsService: TravelsService, private _route: ActivatedRoute) {
    this._travel = {} as Travel;
    this._isTravel = false;
  }

  /**
   * Returns private property _person
   */
  get travel(): Travel {
    return this._travel;
  }

  /**
   * Returns flag to know if we are on a profile or on HP
   */
  get isTravel(): boolean {
    return this._isTravel;
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {
      this._route.params.pipe(
        filter(params => !!params['_id']),
        flatMap(params => this._travelsService.fetchOne(params['_id'])),
        tap(_ => this._isTravel = true)
      )
      .subscribe((travel: any) => this._travel = travel);
  }
}
