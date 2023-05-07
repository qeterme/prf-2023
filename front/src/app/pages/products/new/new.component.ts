import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { identicon } from 'minidenticons';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/services/product/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class ProductNewComponent {
  constructor(private productService: ProductService, private router: Router) {}

  course: Product = {_id: '', name: '', description: '', price: 0};
  imgSrc = '';

  onNameChange(event: Event) {
    this.course.name = (event.target as HTMLInputElement).value;
    this.imgSrc =
      'data:image/svg+xml;utf8,' +
      encodeURIComponent(identicon(this.course.name));
  }

  onDescriptionChange(event: Event) {
    this.course.description = (event.target as HTMLInputElement).value;
  }

  onPriceChange(event: Event) {
    this.course.price = Number((event.target as HTMLInputElement).value);
  }

  saveCourse() {
    this.productService.createProduct(this.course).subscribe((product: Product) => {
      Swal.fire({
        icon: 'success',
        title: 'Course added',
        timer: 1500,
        showConfirmButton: false,
      });
      this.router.navigate(['/courses']);
    });
  }
}
