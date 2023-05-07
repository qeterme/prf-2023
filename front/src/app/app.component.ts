import { Component, OnInit } from '@angular/core';
import { identicon } from 'minidenticons';
import { AuthService } from './services/auth/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'front';
  avatarSrc = 'data:image/svg+xml;utf8,' + encodeURIComponent(identicon(this.authService.getCurrentUser()?.username ?? 'anonymous'));

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.avatarSrc = 'data:image/svg+xml;utf8,' + encodeURIComponent(identicon(this.authService.getCurrentUser()?.username ?? 'anonymous'));
  }
  
  logout() {
    this.authService.logout();
    this.avatarSrc = 'data:image/svg+xml;utf8,' + encodeURIComponent(identicon(this.authService.getCurrentUser()?.username ?? 'anonymous'));
    Swal.fire({
      icon: 'success',
      title: 'Logged out',
      timer: 1500,
      showConfirmButton: false,
    });
  }

  isLoggedIn() {
    this.avatarSrc = 'data:image/svg+xml;utf8,' + encodeURIComponent(identicon(this.authService.getCurrentUser()?.username ?? 'anonymous'));
    return this.authService.getCurrentUser() != null;
  }

  isAdmin() {
    return this.authService.isCurrentUserAdmin();
  }
}
