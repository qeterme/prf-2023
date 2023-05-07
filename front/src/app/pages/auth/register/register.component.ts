import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  username = '';
  password = '';
  email = '';

  constructor(private authService: AuthService) {}

  onUsernameChange(event: Event) {
    this.username = (event.target as HTMLInputElement).value;
  }

  onEmailChange(event: Event) {
    this.email = (event.target as HTMLInputElement).value;
  }

  onPasswordChange(event: Event) {
    this.password = (event.target as HTMLInputElement).value;
  }

  register() {
    this.authService
      .register({
        username: this.username,
        password: this.password,
        email: this.email,
      })
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Register successful',
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
