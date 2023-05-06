import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { identicon } from 'minidenticons';

@Component({
  selector: 'app-id',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.scss'],
})
export class UsersIdComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  username: string = 'laci';
  email = '';
  imgSrc = '';
  id = '';

  onUsernameChange(event: Event) {
    this.username = (event.target as HTMLInputElement).value;
    this.imgSrc =
      'data:image/svg+xml;utf8,' + encodeURIComponent(identicon(this.username));
  }

  onEmailChange(event: Event) {
    this.email = (event.target as HTMLInputElement).value;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      console.log(params['id']);
    });
    this.imgSrc =
      'data:image/svg+xml;utf8,' + encodeURIComponent(identicon(this.username));
  }
}
