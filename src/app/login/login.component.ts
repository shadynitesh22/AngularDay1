import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../environment/environment';
import {MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {

  loginform: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';


  constructor(private router:Router,public snackbar:MatSnackBar) { }
  
  ngOnInit(){
    this.loginform = new FormGroup({
      username: new FormControl("",[Validators.required,Validators.maxLength(20)]),

      password: new FormControl("",[Validators.required,Validators.maxLength(10)]),
   
    })
 
 
    

  };s
  hide = true;
  get passwordInput() { return this.loginform.get('password'); }  
  
  login(){
    if (this.loginform.value["username"] == environment.username && this.loginform.value["password"] == environment.password){
 
      this.snackbar.open("Login Successfull","Dismiss",{duration:1000,
      horizontalPosition:this.horizontalPosition,
      verticalPosition:this.verticalPosition,
      panelClass: ['warning']
    
      
      
      }
      
      );
      localStorage.setItem("login_token",("xyzxyxzsdaysdasyzdasydasy1233@fasdjkdfasg"));
      this.router.navigate(['/dashboard']);

    }else
    {
      window.alert("Invalid username or password");
      console.log("login failed");
    }
  

    

  }
  public myError = (controlName: string, errorName: string) =>{
    return this.loginform.controls[controlName].hasError(errorName);
    };
    // get passwordInput() { return this.loginform.get('password'); }  

    
}
