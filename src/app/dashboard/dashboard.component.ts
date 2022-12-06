import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private router: Router) { }

  logout(){

    localStorage.removeItem("login_token");
    this.router.navigate(['/login']);
    window.alert("Logout success");
    
  }
}
