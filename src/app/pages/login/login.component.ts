import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userData = {};
  resp: any = {};

  wrongCredentials: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }


  ngOnInit() {
    this.authService.logout();
  }

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
  });


  onLogin() {
    this.userData = {
      "email": this.email.value,
      "password": this.password.value
    };

    this.authService.login(this.userData)
      .subscribe(res => {
        this.resp = res;
        this.authService.authenticate(this.resp.role);
        console.log(res);
        localStorage.setItem('token', this.resp['token']);
        if (this.resp.role == 'ROLE_USER')
          this.router.navigate(['home']);
        else if (this.resp.role == 'ROLE_SUPER_ADMIN')
          this.router.navigate(['admins']);
          else if (this.resp.role == 'ROLE_ADMIN')
          this.router.navigate(['my-notes']);
      }, err => {
        if (err.status == 401) {
          this.wrongCredentials = true;
        }
      });
  }

  get email() {
    return this.loginForm['controls'].email;
  }

  get password() {
    return this.loginForm['controls'].password;
  }

}
