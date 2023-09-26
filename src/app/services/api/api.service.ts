import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getWeatherData(city: string) {
    return this.http.get(this.baseUrl + '/weather/' + city);
  }

  getUserDetails() {
    return this.http.get(this.baseUrl + '/users/info');
  }

  updateUserDetails(userDatails: any) {
    return this.http.post(this.baseUrl + '/users/info', userDatails);
  }

  getAllAdmins() {
    return this.http.get(this.baseUrl + '/admins');
  }

  createAdmin(adminData: any) {
    return this.http.post(this.baseUrl + '/admins', adminData);
  }

  deleteAdmin(email: string) {
    return this.http.delete(this.baseUrl + '/admins/' + email);
  }

  getAllNotes() {
    return this.http.get(this.baseUrl + '/notes');
  }

  getAllPredefinedNotes() { 
    return this.http.get(this.baseUrl + '/notes/predefined');
  }

  createNote(noteData: any) {
    return this.http.post(this.baseUrl + '/notes', noteData);
  }

  getMyNotes() {
    return this.http.get(this.baseUrl + '/notes/me');
  }

  updateUser(updatedUser: any) {
    return this.http.put(this.baseUrl + '/users/info', updatedUser);
  } 
}
