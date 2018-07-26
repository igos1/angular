import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private router: Router) { }

  private rand() {
    return Math.random().toString(36).substr(2);
  };

  private token() {
    return this.rand() + this.rand();
  };

  login(email: string, password: string) {
    let user = {
      email: email,
      Password: password,
      Token: this.token()
    };
    let userStr = JSON.stringify(user);
    localStorage.setItem("myUser", userStr);
    console.log('Успешно зарегистрирован!');
    this.goToHome();
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  logout() {
    if (localStorage.getItem("myUser")) {
      localStorage.removeItem("myUser");
      this.router.navigate(['/Login']);
      console.log('Logout');
    }
  }

  isAuthenticated() {
    return !!localStorage.getItem("myUser");
    // if (localStorage.getItem("myUser")) {
    //   return true;
    // }
    // return false;
  }

  getUserInfo() {
    if (localStorage.getItem("myUser")) {
      let userStr = localStorage.getItem("myUser");
      return JSON.parse(userStr).email;
    }
  }
}
