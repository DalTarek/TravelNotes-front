import { Component, OnInit } from '@angular/core';
import { Travel } from '../shared/interface/travel';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'nwt-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {

  private _travel: Travel;
  private _isTravel: boolean;
  private results: string;

  /**
   * Component constructor
   */
  constructor(private http: HttpClient) {
    this._travel = {} as Travel;
    this._isTravel = false;
  }

  /**
   * Return private property _travel
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
    this.http.get('/api/travels/1').subscribe(data => {
      this.results = data["results"];
    });
  }

}
