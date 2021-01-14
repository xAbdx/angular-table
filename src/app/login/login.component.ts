import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
},
)
export class LoginComponent implements OnInit {
  username:string;
  password:string;

  constructor() { }

  ngOnInit(): void {
  }

  LoginUser(){
    if(this.username == "admin" && this.password == "123"){
      alert("Hi");
    }else{
      alert("No Such User");
    }
  }
}
