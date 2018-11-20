import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { defaultIfEmpty, filter, map } from 'rxjs/operators';
import {Travel} from '../interfaces/travel';

@Injectable({
  providedIn: 'root'
})
export class TravelsService {
  // private property to store all backend URLs
  private readonly _backendURL: any;
  // private property to store default travel
  private readonly _defaultTravel: Travel;

  constructor(private _http: HttpClient) {
    this._defaultTravel = {
      departure: '15/10/2000',
      arrival: '15/11/2000',
      country: 'France',
      city: 'Paris',
      numberPerson: '5',
      photo: 'https://randomuser.me/api/portraits/lego/6.jpg',
      hotel: 'Abc',
      price: '500',
      description: 'Very good'
    };
    this._backendURL = {};

    // build backend base url
    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    // build all backend urls
    Object.keys(environment.backend.endpoints).forEach(k => this._backendURL[ k ] = `${baseUrl}${environment.backend.endpoints[ k ]}`);
  }

  /**
   * Returns the default travel value
   */
  get defaultTravel(): Travel {
    return this._defaultTravel;
  }

  /**
   * Function to return list of travel
   */
  fetch(): Observable<Travel[]> {
    return this._http.get<Travel[]>(this._backendURL.allTravels)
      .pipe(
        filter(_ => !!_),
        defaultIfEmpty([])
      );
  }

  /**
   * Function to return one travel for current id
   */
  fetchOne(id: string): Observable<Travel> {
    return this._http.get<Travel>(this._backendURL.oneTravels.replace(':id', id));
  }

  /**
   * Function to create a new travel
   */
  create(travel: Travel): Observable<any> {
    return this._http.post<Travel>(this._backendURL.allTravels, travel, this._options());
  }

  /**
   * Function to update one travel
   */
  update(travel: Travel): Observable<any> {
    return this._http.put<Travel>(this._backendURL.oneTravels.replace(':id', travel.id), travel, this._options());
  }

  /**
   * Function to delete one travel for current id
   */
  delete(id: string): Observable<string> {
    return this._http.delete(this._backendURL.oneTravels.replace(':id', id))
      .pipe(
        map(_ => id)
      );
  }

  /**
   * Function to return request options
   */
  private _options(headerList: Object = {}): any {
    return { headers: new HttpHeaders(Object.assign({ 'Content-Type': 'application/json' }, headerList)) };
  }
}
