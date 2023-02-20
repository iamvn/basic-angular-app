import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {ProductsComponent} from "./components/products/products.component";
import {ServicesComponent} from "./components/services/services.component";
import {ContactComponent} from "./components/contact/contact.component";
import {LoginComponent} from "./authentication/login/login.component";
import {CommonLayoutComponent} from "./components/common-layout/common-layout.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'main-component',
    component: CommonLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent,
        pathMatch: 'full'
      },
      {
        path: 'about',
        component: AboutComponent,
        pathMatch: 'full'
      },
      {
        path: 'products',
        component: ProductsComponent,
        pathMatch: 'full'
      },
      {
        path: 'services',
        component: ServicesComponent,
        pathMatch: 'full'
      },
      {
        path: 'contact',
        component: ContactComponent,
        pathMatch: 'full'
      },
      {
        path: 'product-1',
        loadChildren: ()=> import('../app/components/product1/product1/product1-routing.module').then((p)=>p.Product1RoutingModule),
        pathMatch: 'full'
      }
   ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
