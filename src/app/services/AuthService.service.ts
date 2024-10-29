import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/api'; // Replace with your API base URL

  constructor(private http: HttpClient) {}

  // User Registration
  register(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { email, password });
  }

  // User Login
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password });
  }

  // User Logout
  logout(token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: token,
    });
    return this.http.post(`${this.apiUrl}/logout`, {}, { headers });
  }

  // Check Connection
  checkConnection(token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: token,
    });
    return this.http.get(`${this.apiUrl}/check-connection`, { headers });
  }
}
