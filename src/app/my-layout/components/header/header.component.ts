import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization/authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [AuthorizationService]
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthorizationService) {

  }

  ngOnInit() {
  }

  logOff() {
    console.log(this.authService.GetUserInfo());
    this.authService.Logout();
  }
}
