import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialComponent } from './angular-material/angular-material.component';
import { CliDocComponent } from './cli-doc/cli-doc.component';
import { LearnAngularComponent } from './learn-angular/learn-angular.component';

const routes: Routes = [
{path:'angular-material', component:AngularMaterialComponent},
{path:'cli-doc', component:CliDocComponent},
{path:'learn-angular', component:LearnAngularComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
