import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/Order';
import { AuthService } from 'src/app/services/auth/auth.service';
import { OrderService } from 'src/app/services/order/order.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];

  constructor(
    private orderService: OrderService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    if (this.authService.isCurrentUserAdmin()) {
      this.orderService.getOrders().subscribe((orders) => {
        this.orders = orders;
      });
    } else {
      this.orderService.getMyOrders().subscribe((orders) => {
        this.orders = orders;
      });
    }
  }

  isAdmin() {
    return this.authService.isCurrentUserAdmin();
  }

  deleteOrder(id?: string) {
    if (id) {
      this.orderService.deleteOrder(id).subscribe(() => {
        this.orders = this.orders.filter((order) => order._id !== id);
        Swal.fire({
          icon: 'success',
          title: 'Order deleted',
          text: 'Calm down, the university will still know that you bought your grade for this course.',
        });
      });
    }
  }
}
