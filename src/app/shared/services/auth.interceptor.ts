import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import store from 'store2';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // this condition to prevent page reload if the requested url contains '/'
    if (request.url === '/') {
      return next.handle(request);
    }
    let params = request.params;
    if (store.has('token')) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${store.get('token')}`,
        },
        params
      });
    }
    return next.handle(request);
  }
}
