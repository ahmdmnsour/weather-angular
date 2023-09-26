import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
  private token: string | null = '';

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.token = localStorage.getItem('token');
    if (this.token != null) {
      const authReq = request.clone({
        setHeaders: {
          'Authorization': 'Bearer ' + this.token
        }
      });
      return next.handle(authReq);

    }
    return next.handle(request);
    
  }
}
