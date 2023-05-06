import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username = '';
  password = '';

  onUsernameChange(event: Event) {
    this.username = (event.target as HTMLInputElement).value;
  }
  onPasswordChange(event: Event) {
    this.password = (event.target as HTMLInputElement).value;
  }
}
