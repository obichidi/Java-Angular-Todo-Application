import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage = 'An Error Occured!  Contact Support at *** - ***'


  constructor() { }

  ngOnInit(): void {

    console.log(this.errorMessage)

  }

}
