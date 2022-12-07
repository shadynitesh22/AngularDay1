import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../environment/environment';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {

  loginform: FormGroup;

  constructor(private router:Router) { }
  
  ngOnInit(){
    this.loginform = new FormGroup({
      username: new FormControl([""]),

      password: new FormControl([""]),
   
    })
 
 
    

  };s
  hide = true;
  
  login(){
    if (this.loginform.value["username"] == environment.username && this.loginform.value["password"] == environment.password){
      console.log("login success");
      window.alert("Login success");
      localStorage.setItem("login_token",("xyzxyxzsdaysdasyzdasydasy1233@fasdjkdfasg"));
      this.router.navigate(['/dashboard']);

    }else
    {
      window.alert("Invalid username or password");
      console.log("login failed");
    }
  

    

  }


}
