import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Travel} from '../interfaces/travel';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: [ './form.component.css' ]
})
export class FormComponent implements OnInit, OnChanges {
  // private property to store update mode flag
  private _isUpdateMode: boolean;
  // private property to store model value
  private _model: Travel;
  // private property to store cancel$ value
  private readonly _cancel$: EventEmitter<void>;
  // private property to store submit$ value
  private readonly _submit$: EventEmitter<Travel>;
  // private property to store form value
  private readonly _form: FormGroup;

  /**
   * Component constructor
   */
  constructor() {
    this._submit$ = new EventEmitter<Travel>();
    this._cancel$ = new EventEmitter<void>();
    this._form = this._buildForm();
  }

  /**
   * Sets private property _model
   */
  @Input()
  set model(model: Travel) {
    this._model = model;
  }

  /**
   * Returns private property _model
   */
  get model(): Travel {
    return this._model;
  }

  /**
   * Returns private property _form
   */
  get form(): FormGroup {
    return this._form;
  }

  /**
   * Returns private property _isUpdateMode
   */
  get isUpdateMode(): boolean {
    return this._isUpdateMode;
  }

  /**
   * Returns private property _cancel$
   */
  @Output('cancel')
  get cancel$(): EventEmitter<void> {
    return this._cancel$;
  }

  /**
   * Returns private property _submit$
   */
  @Output('submit')
  get submit$(): EventEmitter<Travel> {
    return this._submit$;
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {
  }

  /**
   * Function to handle component update
   */
  ngOnChanges(record) {
    if (record.model && record.model.currentValue) {
            console.log("BBBB " + this._model);
            console.log("CCC " + record.model.currentValue);
      this._model = record.model.currentValue;
      this._isUpdateMode = true;
      this._form.patchValue(this._model);
    } else {
      this._model = {
        departure: 0,
        arrival: 0,
        country: '',
        city: '',
        numberPerson: 5,
        hotel: '',
        price: 500,
        description: '',
        photo: 'https://randomuser.me/api/portraits/lego/6.jpg',
      };
      this._isUpdateMode = false;
    }
  }

  /**
   * Function to emit event to cancel process
   */
  cancel() {
    this._cancel$.emit();
  }

  /**
   * Function to emit event to submit form and travel
   */
  submit(travel: Travel) {
    this._submit$.emit(travel);
  }

  /**
   * Function to build our form
   */
  private _buildForm(): FormGroup {
    return new FormGroup({
      _id: new FormControl('0'),
      departure: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(1)
      ])),
      arrival: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(1)
      ])),
      country: new FormControl('', Validators.compose([
        Validators.required
      ])),
      photo: new FormControl('https://randomuser.me/api/portraits/lego/6.jpg'),
      city: new FormControl('', Validators.compose([
        Validators.required
      ])),
      numberPerson: new FormControl('', Validators.compose([
        Validators.required
      ])),
      hotel: new FormControl('', Validators.compose([
        Validators.required
      ])),
      price: new FormControl('', Validators.compose([
        Validators.required
      ])),
      description: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  }
}
