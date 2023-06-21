import { Injectable } from '@angular/core';
import { User } from '../User';
import { Users } from '../socialUsers';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}
  getUsers(): User[] {
    return Users;
  }
}
