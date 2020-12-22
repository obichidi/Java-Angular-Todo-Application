import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'ochidi1'
  password =''

  errorMessage = 'Invalid Credits';

  invalidLogin = false



  constructor(private router: Router,
    private harcodedAuthenticationService: HardcodedAuthenticationService ) { }

  ngOnInit(): void {

    
  }


  handleLogin(){
    // console.log(this.username);
    // console.log(this.password);
    if(this.harcodedAuthenticationService.authenticate(this.username, this.password)){
      this.invalidLogin = false;

      this.router.navigate(['welcome', this.username])
    }

    else{
      this.invalidLogin = true;
    }

    console.log(this.invalidLogin);
  }
}
