import { Component, OnInit } from '@angular/core';
import { filter, flatMap, tap } from 'rxjs/operators';
import { TravelsService } from '../shared/services/travels.service';
import { merge } from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import { Travel } from '../shared/interfaces/travel';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: [ './travel.component.css' ]
})
export class TravelComponent implements OnInit {
  // private property to store travel value
  private _travel: any;
  // private property to store flag to know if it's a travel
  private _isTravel: boolean;

  /**
   * Component constructor
   */
  constructor(private _router: Router, private _travelsService: TravelsService, private _route: ActivatedRoute) {
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
    merge(
    this._route.params.pipe(
      filter(params => !!params['id']),
      flatMap(params => this._travelsService.fetchOne(params['id'])),
      tap(_ => this._isTravel = true)
    ),
    this._route.params.pipe(
      filter(params => !params['id']),
      flatMap(_ => this._travelsService.fetchRandom()),
      tap(_ => this._isTravel = false)
      )
    )
    .subscribe((travel: any) => this._travel = travel);
  }

  /**
  * Returns random people
  */
  random() {
    this._travelsService
    .fetchRandom()
    .subscribe((travel: Travel) => this._travel = travel);
  }


  /**
  * Function to delete one travel
  */
  delete(travel: Travel) {
    console.log(travel);
    this._travelsService
    .delete(travel._id)
    .subscribe(_ => {
      this._travel = _;
      this._router.navigate(['/travels']);
     });
  }

}
