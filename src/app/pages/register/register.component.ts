import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CustomValidators } from './custom.validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userData = {};
  resp: any = {}

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.authService.logout();
  }
  
  signupForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      CustomValidators.patternValidator(/\d/, { shouldHaveNum: true }),
      CustomValidators.patternValidator(/[A-Z]/, { shouldHaveUpper: true }),
      CustomValidators.patternValidator(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/, { shouldHaveSpecial: true }),
    ]),
    passowrdConfirmation: new FormControl(),
  }, CustomValidators.passwordMatchValidator);

  onSubmit() {
    this.userData = {
      "email": this.email.value,
      "name": this.name.value,
      "password": this.password.value
    }

    this.authService.signUp(this.userData)
      .subscribe(res => {
        this.resp = res;
        this.authService.authenticate(this.resp.role);
        localStorage.setItem('token', this.resp['token']);
        this.router.navigate(['home']);
      }, err => {
        alert(err.error.message);
      });

    
  }

  get name() {
    return this.signupForm['controls'].name;
  }

  get email() {
    return this.signupForm['controls'].email;
  }

  get password() {
    return this.signupForm['controls'].password;
  }

  get passowrdConfirmation() {
    return this.signupForm['controls'].passowrdConfirmation;
  }

}
