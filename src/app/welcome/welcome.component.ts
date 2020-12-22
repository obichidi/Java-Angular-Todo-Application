import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelloWorldBean, WelcomeDataService } from '../service/service/data/welcome-data.service';




@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
name = '';

  welcomeMessageFromService: string | undefined;

  message = "Welcome to the jungle!"

  constructor( private route: ActivatedRoute,
   private service: WelcomeDataService ) { }

  ngOnInit(){
    console.log(this.message);
    this.name =this.route.snapshot.params['name']
  }



  getWelcomeMessageWithParameter(){

   console.log(this.service.executeHelloWorldBeanService());
   this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
   response =>  this.handleSuccessfulResponse(response),
     error => this.handleErrorResponse(error)
   );

     console.log('last line of ge Welcome Message');
     //console.log("get Welcome Message");
  }

  handleSuccessfulResponse(response: HelloWorldBean){
    this.welcomeMessageFromService = response.message;
    console.log(response)
    console.log(response.message);

  }

  handleErrorResponse(error: any){
   console.log(error);
   console.log(error.error);
   console.log(error.error.message);
    this.welcomeMessageFromService = error.error.message;

  }
}
