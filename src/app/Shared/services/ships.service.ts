import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ShipList } from '../models/shipsList.model';

@Injectable({
  providedIn: 'root',
})
export class ShipsService {
  url = 'https://swapi.dev/api/starships/';
  headerDict = {
    Authorization: 'none',
    'Access-Control-Allow-Origin': '*',
  };
  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };

  constructor(private http: HttpClient) {}

  getShips(): Observable<ShipList> {
    return this.http
      .get(this.url)
      .pipe(map((data: ShipList) => new ShipList(data)));
  }

  getNextShipList(nextShipsUrl) {
    return this.http
      .get(nextShipsUrl)
      .pipe(map((data: ShipList) => new ShipList(data)));
  }
}
