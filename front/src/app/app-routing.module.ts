import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

import { ProductsComponent } from './pages/products/products.component';
import { ProductIdComponent } from './pages/products/id/id.component';
import { ProductIdEditComponent } from './pages/products/id/edit/edit.component';

import { UsersIdComponent } from './pages/users/id/id.component';
import { UsersComponent } from './pages/users/users.component';

import { OrdersIdComponent } from './pages/orders/id/id.component';
import { OrdersComponent } from './pages/orders/orders.component';

import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';

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
