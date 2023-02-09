import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User = {
    id: 1,
    nombre: 'Juan',
    apellido: 'Urtizberea',
    empresa: 'Maxisur',
    email: 'JuanMaxisur@gmail.com',
  };
  constructor() {}

  getUser() {
    return this.user;
  }
}
