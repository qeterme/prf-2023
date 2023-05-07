import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/model/User';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = environment.apiUrl + '/api/users';

  constructor(private http: HttpClient) {}

  getUsers() {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.get<User[]>(this.baseUrl, {
      headers: headers,
      withCredentials: true,
    });
  }

  getUser(id: string) {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  createUser(user: User) {
    return this.http.post<User>(this.baseUrl, user);
  }

  updateUser(user: User) {
    return this.http.patch<User>(`${this.baseUrl}/${user._id}`, user);
  }

  deleteUser(id: string) {
    return this.http.delete<User>(`${this.baseUrl}/${id}`);
  }
}
