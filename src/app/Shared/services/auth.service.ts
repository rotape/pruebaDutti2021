import { Injectable } from '@angular/core';
import { User } from '../models/users.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  saveUserListToLocalStorage(user: User): void {
    const usersList = JSON.parse(localStorage.getItem('UsersList'));
    usersList.push(user);
    localStorage.setItem('UsersList', JSON.stringify(usersList));
  }

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
