import { MainpageComponent } from './mainpage/mainpage.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { DataManagerService } from './data-manager.service';


import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { MyordersComponent } from './myorders/myorders.component';
import { CategoryComponent } from './category/category.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { HttpModule } from '@angular/http';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from '@angular/router';
import { ManageproductsComponent } from './admin/manageproducts/manageproducts.component';
import { HeaderComponent } from './header/header.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { AddproductComponent } from './admin/addproduct/addproduct.component';
import { UpdateproductComponent } from './admin/updateproduct/updateproduct.component';
import { DeleteproductComponent } from './admin/deleteproduct/deleteproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProductsComponent,
    MyordersComponent,
    CategoryComponent,
    BsNavbarComponent,
    OrdersComponent,
    FooterComponent,
    ManageproductsComponent,
    HeaderComponent,
    MainpageComponent,
    AdminhomeComponent,
    AddproductComponent,
    UpdateproductComponent,
    DeleteproductComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'',component:MainpageComponent},
      {path:'categories',component:CategoryComponent},
      {path:'products',component:ProductsComponent},
      {path:'admin',component:AdminhomeComponent},
      {path:'admin/addProduct',component:AddproductComponent},
      {path:'admin/updateProduct',component:UpdateproductComponent},
      {path:'admin/deleteProduct',component:DeleteproductComponent}
  ])
  ],
  providers: [DataManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
