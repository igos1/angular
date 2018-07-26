import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public userLogin: string = 'User Login';
  
  constructor(private authService: AuthorizationService) {

  }

  ngOnInit() {
  
  }

  getUserInfo(): string {
    return this.authService.getUserInfo();
  }

  isUserAuthorized(): boolean{
    return this.authService.isAuthenticated();
  }

  logOff(): void {
    console.log(this.authService.getUserInfo());
    this.authService.logout();
  }
}
