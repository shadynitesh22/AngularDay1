import { Component } from '@angular/core';

@Component({
  selector: 'app-form-detail',
  templateUrl: './form-detail.component.html',
  styleUrls: ['./form-detail.component.css']
})
export class FormDetailComponent {
  data : any
  showData(){
    let data :any = localStorage.getItem("data");
    this.data = JSON.parse(data);
    
    
  }
}
