import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Product1Component} from "./product1.component";

const routes: Routes = [
  {
    path: '',
    component: Product1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Product1RoutingModule { }
