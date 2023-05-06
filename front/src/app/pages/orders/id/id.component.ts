import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { identicon } from 'minidenticons';
import { User } from '../../model/User';
import { Product } from '../../model/Product';
import { Order } from '../../model/Order';

@Component({
  selector: 'app-id',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.scss']
})
export class OrdersIdComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  id = '';
  user: User = {
    id: '0',
    username: 'laci',
    email: 'pontoklacikam@pontok.hu',
  }
  course: Product = {
    id: '0',
    name: 'Discrete Mathematics',
    description: '',
    price: 69696969,
  }
  order: Order = {
    id: '',
    user: this.user,
    product: this.course,
    created_at: new Date()
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      console.log(params['id']);
    });
  }
}
