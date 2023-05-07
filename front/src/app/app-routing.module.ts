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
import { TermsComponent } from './pages/terms/terms.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'courses', component: ProductsComponent },
  { path: 'courses/:id', component: ProductIdComponent },
  {
    path: 'courses/:id/edit',
    component: ProductIdEditComponent,
    canActivate: [AdminGuard],
  },

  { path: 'users', component: UsersComponent, canActivate: [AdminGuard] },
  { path: 'users/:id', component: UsersIdComponent, canActivate: [AdminGuard] },

  { path: 'orders', component: OrdersComponent, canActivate: [AuthGuard] },
  {
    path: 'orders/:id',
    component: OrdersIdComponent,
    canActivate: [AdminGuard],
  },

  { path: 'auth/register', component: RegisterComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth', redirectTo: 'auth/login' },

  { path: 'terms', component: TermsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
