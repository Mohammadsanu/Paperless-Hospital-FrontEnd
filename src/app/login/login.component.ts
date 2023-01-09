import { LoginuserService } from './../loginuser.service';
import { Component, OnInit } from '@angular/core';

import { User } from '../user';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User = new User();

  constructor(private LoginuserService: LoginuserService) { }

  ngOnInit(): void {
  }

  userLogin(){
    console.log(this.user)
    this.LoginuserService.loginUser(this.user).subscribe(data=>{
      alert("Login Successfully")
    },error=>alert("Sorry please enter correct UserId & Password"));
    
  }
}
