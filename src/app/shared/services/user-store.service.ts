import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs'
import { User } from 'src/app/api';
@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  readonly userData = new BehaviorSubject<User>({});
  readonly draftUserData = new BehaviorSubject<User>({});

  constructor() { }

  setUserData(user: User) {
    this.userData.next(user);
  }

  getUserData(): Observable<User> {
    return this.userData.asObservable();
  }

  clearDraftUserData() {
    this.draftUserData.next({})
  }

  setDraftUserData(user: User) {
    this.draftUserData.next(user);
  }

  getDraftUserData(): Observable<User> {
    return this.draftUserData.asObservable();
  }

  clearUserData() {
    this.draftUserData.next({})
  }
}
