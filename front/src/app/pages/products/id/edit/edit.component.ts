import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { identicon } from 'minidenticons';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/services/product/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class ProductIdEditComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  course: Product = null!;
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
    this.productService.updateProduct(this.course).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: 'Course updated',
        timer: 1500,
        showConfirmButton: false,
      });
    });
  }

  deleteCourse() {
    this.productService.deleteProduct(this.course._id).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: 'Course deleted',
        timer: 1500,
        showConfirmButton: false,
      });
      this.router.navigate(['/courses']);
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productService.getProduct(params['id']).subscribe((data) => {
        this.course = data;
        this.imgSrc =
          'data:image/svg+xml;utf8,' +
          encodeURIComponent(identicon(this.course.name));
      });
    });
  }
}
