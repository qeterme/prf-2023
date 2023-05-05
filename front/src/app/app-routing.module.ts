import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { ProductsComponent } from './products/products.component';
import { ProductIdComponent } from './products/id/id.component';
import { ProductIdEditComponent } from './products/id/edit/edit.component';

import { UsersIdComponent } from './users/id/id.component';
import { UsersComponent } from './users/users.component';

import { OrdersIdComponent } from './orders/id/id.component';
import { OrdersComponent } from './orders/orders.component';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductIdComponent },
  { path: 'products/:id/edit', component: ProductIdEditComponent },

  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UsersIdComponent },

  { path: 'orders', component: OrdersComponent },
  { path: 'orders/:id', component: OrdersIdComponent },

  { path: 'auth/register', component: RegisterComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth', redirectTo: 'auth/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
