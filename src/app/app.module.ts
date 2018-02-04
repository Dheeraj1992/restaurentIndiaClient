import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataManagerService } from './data-manager.service';


import {FormsModule} from '@angular/forms';

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
    ManageproductsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'',component:ManageproductsComponent},
      {path:'admin/orders',component:OrdersComponent},
      {path:'admin/products',component:ManageproductsComponent}
  ])
  ],
  providers: [DataManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
