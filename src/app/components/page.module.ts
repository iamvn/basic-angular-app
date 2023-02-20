import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ProductsComponent} from "./products/products.component";
import {ServicesComponent} from "./services/services.component";
import {ContactComponent} from "./contact/contact.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CommonLayoutComponent } from './common-layout/common-layout.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import {HeaderComponent} from "./header/hedaer.component";
import { Product1Component } from './product1/product1/product1.component';




@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ServicesComponent,
    ContactComponent,
    CommonLayoutComponent,
    HeaderComponent,
    Product1Component
  ],
  exports: [
    CommonLayoutComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterOutlet,
    RouterLink
  ]
})
export class PageModule { }
