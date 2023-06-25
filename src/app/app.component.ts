import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  fname:string="Adam";
  lname:string="khan";
  age:number=25;
  gender:string="male";
  country:string="india";
  isEmployed:boolean=true;

  handleSubmitBtn(){
     
    this.fname="johan";
    this.lname="sinha";
    this.age=55;
    this.gender="male";
    this.country="America";
    this.isEmployed=false;

  }


}
