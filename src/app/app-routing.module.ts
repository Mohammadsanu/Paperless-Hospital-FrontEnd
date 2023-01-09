import { LoginpageComponent } from './loginpage/loginpage.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: "",
    component: WelcomeScreenComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "loginpage",
    component: LoginpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
