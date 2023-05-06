import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';

import { ProductsComponent } from './pages/products/products.component';
import { ProductIdComponent } from './pages/products/id/id.component';
import { ProductIdEditComponent } from './pages/products/id/edit/edit.component';

import { RegisterComponent } from './pages/auth/register/register.component';
import { LoginComponent } from './pages/auth/login/login.component';

import { UsersComponent } from './pages/users/users.component';
import { UsersIdComponent } from './pages/users/id/id.component';

import { OrdersComponent } from './pages/orders/orders.component';
import { OrdersIdComponent } from './pages/orders/id/id.component';
import { CardComponent } from './components/card/card.component';

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
    CardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
