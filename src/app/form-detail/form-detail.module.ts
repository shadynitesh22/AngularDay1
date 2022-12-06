import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDetailComponent } from './form-detail.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'', component:FormDetailComponent},
    
  ];


@NgModule({
  declarations: [
 
  
    FormDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
    
  ]
})
export class FormDetailModule { 

  

}
