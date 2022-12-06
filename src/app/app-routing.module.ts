import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/form-control' , pathMatch: 'full' },
  { path: 'form-control', loadChildren: () => import('./form-control/form-control.module').then(m => m.FormControlModule) },
  { path: 'form-detail', loadChildren: () => import('./form-detail/form-detail.module').then(m => m.FormDetailModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
