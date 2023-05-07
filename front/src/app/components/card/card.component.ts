import { Component, Input, OnInit } from '@angular/core';
import { identicon } from 'minidenticons';
import { Product } from 'src/app/model/Product';
import { AuthService } from 'src/app/services/auth/auth.service';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private orderService: OrderService
  ) {}

  @Input() course: Product = null!;

  imgSrc = '';

  ngOnInit(): void {
    this.imgSrc =
      'data:image/svg+xml;utf8,' + encodeURIComponent(identicon(this.course?.name));
  }

  isLoggedIn() {
    return this.authService.getCurrentUser() != null;
  }

  buyNow() {
    if (this.course) {
      this.orderService.newOrder(
        this.authService.getCurrentUser(),
        this.course
      );
    }
  }
}
