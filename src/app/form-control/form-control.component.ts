import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {

  myForm :any = FormGroup;

constructor(private fb: FormBuilder) {}

ngOnInit() {

this.myForm = this.fb.group({ 
email:'',
message:'',
career:'',

})
this.myForm.valueChanges.subscribe(console.log);


}


  data : any


  saveData(){

    let data = {
         email:document.getElementById('email'),
          message:document.getElementById('message'),
          career:document.getElementById('career'),
          

    };
    console.log(data);
    localStorage.setItem("data",JSON.stringify(data));

  }
}
