import { ValidationErrors } from '@angular/forms';

import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from '../register/custom.validators';
import { ApiService } from 'src/app/services/api/api.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-admin-dialog',
  templateUrl: './new-admin-dialog.component.html',
  styleUrls: ['./new-admin-dialog.component.css']
})
export class NewAdminDialogComponent {
  adminData = {};

  alreadyExists: boolean = false;

  constructor(private service: ApiService, private dialogRef: MatDialogRef<NewAdminDialogComponent>) { }

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
    this.adminData = {
      "email": this.email.value,
      "name": this.name.value,
      "password": this.password.value
    }

    this.service.createAdmin(this.adminData)
      .subscribe(res => {
        console.log(res);
        this.dialogRef.close(res);

      }, err => {
        console.log(err);
        if (err.status == 400) {
          this.alreadyExists = true;
        }
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
