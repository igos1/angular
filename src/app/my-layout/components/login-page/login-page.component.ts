import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization/authorization.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {

  constructor(private authService: AuthorizationService) { }
  
  loginIn(email, password) {
    if (email && password) {
      this.authService.login(email, password);
    }
  }
  ngOnInit() {
  }

}
