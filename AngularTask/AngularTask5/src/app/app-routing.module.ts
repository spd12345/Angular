import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{Test3Component}from './test3/test3.component'
const routes: Routes = [
  {
    path:'test3',
    component:Test3Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
