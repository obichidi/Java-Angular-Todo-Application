import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

authenticate(username: string, password: string){

  //console.log('before ' + this.isUserloggedIn());

  if(username ==='ochidi1' && password === 'password'){
    sessionStorage.setItem('authenticaterUser' , username);
    //console.log('after ' + this.isUserloggedIn());
    return true;
  }
  else{
    return false;
  }
}
  isUserloggedIn(){
    let user =sessionStorage.getItem('authenticaterUser');

    return !(user === null)


  }

  logout(){
    sessionStorage.removeItem('authenticaterUser');
  }
}
