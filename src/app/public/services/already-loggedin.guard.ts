import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import store from 'store2';
@Injectable({
  providedIn: 'root'
})
export class AlreadyLoggedinGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return store.has('token') ? this.router.navigate(['/home/dashboard']) : true;
  }
  
}