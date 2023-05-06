import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  popularCourses: Product[] = [];
  newCourses: Product[] = [];
  hardCourses: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProductsRandom().subscribe((products) => {
      this.popularCourses = products.slice(0, 4);
      this.newCourses = products.slice(4, 8);
      this.hardCourses = products.slice(8, 12);
    });
  }
}
