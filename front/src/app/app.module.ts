import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';

import { ProductsComponent } from './products/products.component';
import { ProductIdComponent } from './products/id/id.component';
import { ProductIdEditComponent } from './products/id/edit/edit.component';

import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';

import { UsersComponent } from './users/users.component';
import { UsersIdComponent } from './users/id/id.component';

import { OrdersComponent } from './orders/orders.component';
import { OrdersIdComponent } from './orders/id/id.component';

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,

    ProductsComponent,
    ProductIdComponent,
    ProductIdEditComponent,

    RegisterComponent,
    LoginComponent,

    UsersComponent,
    UsersIdComponent,

    OrdersComponent,
    OrdersIdComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
