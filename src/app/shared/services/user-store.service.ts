import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs'
import { User } from 'src/app/api';
@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  readonly userData = new BehaviorSubject<User>({});
  constructor() { }

  setUserData(user: User) {
    this.userData.next(user);
  }

  getUserData(): Observable<User> {
    return this.userData.asObservable();
  }

  clearUserData() {
    this.userData.next({})
  }
}
