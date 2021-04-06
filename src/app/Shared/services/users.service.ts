import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { User } from '../models/users.model';

const API_URL = `https://jsonplaceholder.typicode.com/users`;
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsersList(): Observable<User[]> {
    return this.http
      .get<User[]>(`${API_URL}`)
      .pipe(map((users: User[]) => users.map((i) => new User(i))));
  }
}
