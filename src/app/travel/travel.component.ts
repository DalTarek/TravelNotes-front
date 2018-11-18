import { Component, OnInit } from '@angular/core';
import {Travel} from '../share/interface/travel';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {

  private _travel: Travel;

  /**
   * Component constructor
   */
  constructor() {
  }

  /**
   * Return private property _travel
   */
  get travel(): Travel {
    return this._travel;
  }

  ngOnInit() {
  }

}
