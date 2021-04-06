import { Injectable } from '@angular/core';
import { User } from '../models/users.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  saveUserToLocalStorage(user: User): void {
    const u = user.json();
    localStorage.setItem('User', JSON.stringify(u));
  }

  getUserFromStorage(): User {
    const userFromStorage: string = localStorage.getItem('User');
    let user: User = null;
    if (userFromStorage) {
      user = new User(JSON.parse(userFromStorage));
    }
    return user;
  }

  logOut() {
    localStorage.clear();
  }
}
