import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization/authorization.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers: [AuthorizationService]
})
export class LoginPageComponent implements OnInit {

  constructor(private authService: AuthorizationService) {  }
  LoginIn(email,password){
   if(email && password ) {this.authService.Login(email,password);}
  }
  ngOnInit() {
  }

}
