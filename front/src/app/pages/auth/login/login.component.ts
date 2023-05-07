import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService) {}

  onUsernameChange(event: Event) {
    this.username = (event.target as HTMLInputElement).value;
  }
  onPasswordChange(event: Event) {
    this.password = (event.target as HTMLInputElement).value;
  }

  login() {
    this.authService
      .login({ username: this.username, password: this.password })
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Login successful',
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: err.message,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  }
}
