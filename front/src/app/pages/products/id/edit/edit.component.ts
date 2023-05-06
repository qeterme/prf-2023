import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { identicon } from 'minidenticons';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class ProductIdEditComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  name: string = 'Discrete Mathematics';
  description =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at bibendum libero, et porttitor mauris. Donec ut risus vel tellus laoreet interdum at sit amet neque. Pellentesque aliquam, nulla ac hendrerit commodo, ipsum sapien viverra erat, sed vehicula ante nunc in eros. Nunc pellentesque cursus eros et posuere. Morbi rutrum, leo in fringilla lobortis, neque ante viverra est, nec volutpat turpis arcu aliquam nisi. Vestibulum venenatis eleifend dictum. Aliquam ut lacinia nulla. Etiam ullamcorper lorem in augue mattis, fermentum tincidunt sapien posuere. Aenean lacus nisl, egestas vitae pellentesque eu, tempor et quam. Donec tristique commodo eros, id malesuada libero interdum vel. Donec interdum nec orci et consequat. Nam dapibus orci in urna tincidunt convallis.';
  price = '69696969';
  imgSrc = '';
  id = '';

  onNameChange(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
    this.imgSrc = 'data:image/svg+xml;utf8,' + encodeURIComponent(identicon(this.name));
  }

  onDescriptionChange(event: Event) {
    this.description = (event.target as HTMLInputElement).value;
  }

  onPriceChange(event: Event) {
    this.price = (event.target as HTMLInputElement).value;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      console.log(params['id']);
    });
    this.imgSrc =
      'data:image/svg+xml;utf8,' + encodeURIComponent(identicon(this.name));
  }
}