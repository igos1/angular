import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor() { }
  private user = {
    login: 'MyLogin',
    email: '',
    password: '',
    token: ''
  };
  private rand() {
    return Math.random().toString(36).substr(2);
  };

  private token() {
    return this.rand() + this.rand();
  };

  Login(email: string, password: string) {
    this.user.email = email;
    this.user.password = password;
    this.user.token = this.token();
    console.log('Успешно зарегистрирован!');
  }

  Logout() {
    this.user.email = '';
    this.user.password = '';
    this.user.token = '';
  }

  IsAuthenticated(login) {

    if (this.user.login = login) {
      return true;
    }
    return false;
  }

  GetUserInfo() {
    return this.user.login;
  }

}
