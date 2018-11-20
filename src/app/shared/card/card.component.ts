import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Travel} from '../interfaces/travel';

@Component({
  selector: 'nwt-card',
  templateUrl: './card.component.html',
  styleUrls: [ './card.component.css' ]
})
export class CardComponent implements OnInit {
  // private property to store travel value
  private _travel: Travel;
  // private property to store delete$ value
  private readonly _delete$: EventEmitter<Travel>;

  /**
   * Component constructor
   */
  constructor() {
    this._travel = {} as Travel;
    this._delete$ = new EventEmitter<Travel>();
  }

  /**
   * Returns private property _travel
   */
  get travel(): Travel {
    return this._travel;
  }

  /**
   * Sets private property _travel
   */
  @Input()
  set travel(travel: Travel) {
    this._travel = travel;
  }

  /**
   * Returns private property _delete$
   */
  @Output('deleteTravel') get delete$(): EventEmitter<Travel> {
    return this._delete$;
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {
  }

  /**
   * Function to emit event to delete current travel
   */
  delete(travel: Travel) {
    this._delete$.emit(travel);
  }
}
