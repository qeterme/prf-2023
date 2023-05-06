import { Component, Input, OnInit } from '@angular/core';
import { identicon } from 'minidenticons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  // add name, description, price inputs
  @Input() name = '';
  @Input() description = '';
  @Input() price = 0;
  @Input() id = '';

  imgSrc = '';

  ngOnInit(): void {
    this.imgSrc = 'data:image/svg+xml;utf8,' + encodeURIComponent(identicon(this.name));
  }
}
