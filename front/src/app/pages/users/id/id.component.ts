import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { identicon } from 'minidenticons';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-id',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.scss'],
})
export class UsersIdComponent implements OnInit {
  constructor(private route: ActivatedRoute, private userService: UserService) {}

  user: User = null!;
  imgSrc = '';

  onUsernameChange(event: Event) {
    this.user.username = (event.target as HTMLInputElement).value;
    this.imgSrc =
      'data:image/svg+xml;utf8,' + encodeURIComponent(identicon(this.user.username));
  }

  onEmailChange(event: Event) {
    this.user.email = (event.target as HTMLInputElement).value;
  }

  onRoleChange(event: Event) {
    this.user.role = (event.target as HTMLInputElement).value;
  }

  saveUser() {
    this.userService.updateUser(this.user).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: 'User updated',
        timer: 1500,
        showConfirmButton: false,
      });
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userService.getUser(params['id']).subscribe((data) => {
        this.user = data;
        this.imgSrc =
          'data:image/svg+xml;utf8,' +
          encodeURIComponent(identicon(this.user.username));
      });
    });
  }
}
