import { Injectable } from '@angular/core';
import { DefaultService, User, UsersGet200Response } from 'src/app/api';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private defaultService: DefaultService) { }

  listUsers(page = 1, pageLimit = 10): Observable<UsersGet200Response> {
    return this.defaultService.usersGet(page, pageLimit);
  }

  updateUser(user: User) {
    return this.defaultService.usersIdPatch(user)
  }

  deleteUser(id: number) {
    return this.defaultService.usersIdDelete(id);
  }
}
