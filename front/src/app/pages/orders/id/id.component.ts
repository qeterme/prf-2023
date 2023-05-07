import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { identicon } from 'minidenticons';
import { User } from '../../../model/User';
import { Product } from '../../../model/Product';
import { Order } from '../../../model/Order';
import { OrderService } from 'src/app/services/order/order.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-id',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.scss'],
})
export class OrdersIdComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private router: Router
  ) {}

  user: User = null!;
  course: Product = null!;
  order: Order = null!;

  userAvatar = '';
  courseAvatar = '';

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.orderService.getOrder(params['id']).subscribe((data) => {
        this.order = data;
        this.user = this.order.user;
        this.course = this.order.product;

        this.userAvatar = 'data:image/svg+xml;utf8,' + encodeURIComponent(identicon(this.user.username));
        this.courseAvatar = 'data:image/svg+xml;utf8,' + encodeURIComponent(identicon(this.course.name));
      });
    });
  }

  deleteOrder() {
    if (this.order._id) {
      this.orderService.deleteOrder(this.order._id).subscribe(() => {
        this.order = null!;
      });
      Swal.fire({
        icon: 'success',
        title: 'Order deleted',
        timer: 1500,
        showConfirmButton: false,
      });
      this.router.navigate(['/orders']);
    }
  }
}
