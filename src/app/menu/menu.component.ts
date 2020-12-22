import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isUserLoggedIn: boolean = false;

  constructor( public hardCodedAuthentication: HardcodedAuthenticationService) { }

  ngOnInit(): void {
  //this.isUserLoggedIn = this.hardCodedAuthentication.isUserloggedIn();

  }

}
