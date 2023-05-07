import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from 'src/app/model/Order';
import { Product } from 'src/app/model/Product';
import { User } from 'src/app/model/User';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseUrl = environment.apiUrl + '/api/orders';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getOrders() {
    return this.http.get<Order[]>(this.baseUrl);
  }

  getMyOrders() {
    // make a request to baseurl/my with the current user being in the body

    return this.http.post<Order[]>(`${this.baseUrl}/my`, this.authService.getCurrentUser());
  }

  getOrder(id: string) {
    return this.http.get<Order>(`${this.baseUrl}/${id}`);
  }

  createOrder(order: Order) {
    return this.http.post<Order>(this.baseUrl, order);
  }

  deleteOrder(id: string) {
    return this.http.delete<Order>(`${this.baseUrl}/${id}`);
  }

  newOrder(user: User, product: Product) {
    let order: Order = { user: user, product: product }; 
    console.log(order)
    return this.http.post<Order>(this.baseUrl, order).toPromise()
    .then(() => {
      console.log(order)
      return order;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
  }
}
