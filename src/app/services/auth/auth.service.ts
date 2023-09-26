import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/auth';

  isLogin = false;
  roleAs: string = '';
  
  authenticate(value: string) {
    this.isLogin = true;
    this.roleAs = value;
    localStorage.setItem('STATE', 'true');
    localStorage.setItem('ROLE', this.roleAs);
    return { success: this.isLogin, role: this.roleAs };
  }

  logout() {
    this.isLogin = false;
    this.roleAs = '';
    localStorage.setItem('STATE', 'false');
    localStorage.setItem('ROLE', '');
    localStorage.removeItem('token');
    return { success: this.isLogin, role: '' };
  }

  isLoggedIn() {
    const loggedIn = localStorage.getItem('STATE');
    if (loggedIn == 'true')
      this.isLogin = true;
    else
      this.isLogin = false;
    return this.isLogin;
  }

  getRole() {
    this.roleAs = localStorage.getItem('ROLE') || '';
    return this.roleAs;
  }

  constructor(private http: HttpClient) { }

  signUp(userData: any) {
    return this.http.post(this.baseUrl + '/register', userData);
  }

  login(userData: any) {
    return this.http.post(this.baseUrl + '/login', userData);
  }
}
