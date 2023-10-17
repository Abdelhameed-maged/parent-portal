import { Injectable } from '@angular/core';
import store from 'store2'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn(): boolean {
    return store.has('token')
  }

  logout(): void {
    store.clearAll();
  }
}
