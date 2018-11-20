import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Travel} from '../interface/travel';

@Component({
  selector: 'nwt-form',
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
  ngOnChanges(record) {}

  /**
   * Function to emit event to cancel process
   */
  cancel() {
    this._cancel$.emit();
  }

  /**
   * Function to emit event to submit form and person
   */
  submit(travel: Travel) {
    this._submit$.emit(travel);
  }

  /**
   * Function to build our form
   */
  private _buildForm(): FormGroup {
    return new FormGroup({
      id: new FormControl('0'),
      firstname: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(2)
      ])),
      lastname: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(2)
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required
      ])),
      photo: new FormControl('https://randomuser.me/api/portraits/lego/6.jpg'),
      address: new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        postalCode: new FormControl('')
      }),
      phone: new FormControl('', Validators.compose([
        Validators.required, Validators.pattern('\\d{10}')
      ])),
      isManager: new FormControl(false)
    });
  }
}
