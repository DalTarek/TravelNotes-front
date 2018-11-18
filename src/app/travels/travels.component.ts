import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs';
import { filter, flatMap } from 'rxjs/operators';
import { DialogComponent } from '../shared/dialog/dialog.component';
import { Travel } from '../shared/interface/travel';
import { Router } from '@angular/router';

@Component({
selector: 'nwt-travels',
templateUrl: './travels.component.html',
styleUrls: [ './travels.component.css' ]
})
export class TravelsComponent implements OnInit {

  private _travels: Travel[];
  private _dialogStatus: string;
  private _travelsDialog: MatDialogRef<DialogComponent>;
  private _view: string;

  /**
  * Component constructor
  */
  constructor(private http: HttpClient, private _dialog: MatDialog) {
    this._travels = [];
    this._dialogStatus = 'inactive';
    this._view = 'card';
  }

  /**
  * Returns private property _travels
  */
  get travels(): Travel[] {
  return this._travels;
  }

  /**
  * Returns private property _dialogStatus
  */
  get dialogStatus(): string {
    return this._dialogStatus;
  }

  /**
  * Returns private property _view
  */
  get view(): string {
    return this._view;
  }

  /**
  * OnInit implementation
  */
  ngOnInit() {

  }

  /**
  * Function to delete one person
  */
  delete(travel: Travel) {

  }

  /**
  * Function to display modal
  */
  showDialog() {
  // set dialog status
  this._dialogStatus = 'active';

  // open modal
  this._travelsDialog = this._dialog.open(DialogComponent, {
  width: '500px',
  disableClose: true
  });

  // subscribe to afterClosed observable to set dialog status and do process
  this._travelsDialog.afterClosed()
  .pipe(
  filter(_ => !!_),
  flatMap(_ => this._add(_))
  )
  .subscribe(
  (travels: Travel[]) => this._travels = travels,
  _ => this._dialogStatus = 'inactive',
  () => this._dialogStatus = 'inactive'
  );
  }

  /**
  * Function to switch view
  */
  switchView() {
    this._view = (this._view === 'card') ? 'list' : 'card';
  }

  /**
  * Function to navigate to current person
  */
  navigate(travel: Travel) {

  }

  /**
  * Add new person and fetch all people to refresh the list
  */
  private _add(travel: Travel): Observable<Travel[]> {
    return null;
  }
}
