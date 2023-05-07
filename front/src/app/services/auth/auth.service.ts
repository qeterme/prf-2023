import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environment.apiUrl + '/api/auth';
  private currentUser: User = null!;

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: { username: string; password: string }) {

    return this.http
      .post<User>(`${this.baseUrl}/login`, credentials)
      .toPromise()
      .then((user) => {
        if (user) {
          user.password = '';
          localStorage.setItem('user', JSON.stringify(user));
          this.router.navigate(['/']);
        }
        return user;
      });
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUser = null!;
    return this.http.post(`${this.baseUrl}/logout`, {});
  }

  register(user: User) {
    return this.http
      .post<User>(`${this.baseUrl}/register`, user)
      .toPromise()
      .then((user) => {
        if (user) {
          user.password = '';
          localStorage.setItem('user', JSON.stringify(user));
          this.router.navigate(['/']);
        }
        return user;
      });
  }

  getCurrentUser() {
    if (!this.currentUser) {
      this.currentUser = JSON.parse(localStorage.getItem('user')!);
    }
    return this.currentUser;
  }

  isCurrentUserAdmin() {
    return this.getCurrentUser()?.role === 'admin';
  }
}
