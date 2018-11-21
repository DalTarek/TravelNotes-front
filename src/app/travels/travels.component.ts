import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs';
import { filter, flatMap } from 'rxjs/operators';
import { DialogComponent } from '../shared/dialog/dialog.component';
import { TravelsService } from '../shared/services/travels.service';
import { Router } from '@angular/router';
import {Travel} from '../shared/interfaces/travel';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: [ './travels.component.css' ]
})
export class TravelsComponent implements OnInit {
  // private property to store travels value
  private _travels: Travel[];
  // private property to store dialogStatus value
  private _dialogStatus: string;
  // private property to store dialog reference
  private _travelsDialog: MatDialogRef<DialogComponent>;
  // private property to store view value
  private _view: string;

  /**
  * Component constructor
  */
  constructor(private _router: Router, private _travelsService: TravelsService, private _dialog: MatDialog) {
    this._travels = [];
    this._dialogStatus = 'inactive';
    this._view = 'list';
  }

  /**
  * Returns private property _people
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
    this._travelsService
    .fetch().subscribe((travels: Travel[]) => this._travels = travels);
  }

  /**
  * Function to delete one travel
  */
  delete(travel: Travel) {
    this._travelsService
    .delete(travel._id)
    .subscribe(_ => this._travels = this._travels.filter(__ => __._id !== _));
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
  * Function to navigate to current travel
  */
  navigate(travel: Travel) {
    this._router.navigate([ '/travel', travel._id ]);
  }

  /**
  * Add new travel and fetch all travels to refresh the list
  */
  private _add(travel: Travel): Observable<Travel[]> {
    return this._travelsService
      .create(travel)
      .pipe(
      flatMap(_ => this._travelsService.fetch())
    );
  }
  }
