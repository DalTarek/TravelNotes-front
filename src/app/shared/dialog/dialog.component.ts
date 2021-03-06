import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import {Travel} from '../interfaces/travel';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: [ './dialog.component.css' ]
})
export class DialogComponent implements OnInit {

  /**
   * Component constructor
   */
  constructor(private _dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) private _travel: Travel) {
  }

  /**
   * Returns travel passed in dialog open
   */
  get travel(): Travel {
    return this._travel;
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {
  }

  /**
   * Function to cancel the process and close the modal
   */
  onCancel() {
    this._dialogRef.close();
  }

  /**
   * Function to close the modal and send travel to parent
   */
  onSave(travel: Travel) {
    this._dialogRef.close(travel);
  }
}
