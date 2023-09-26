import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NewAdminDialogComponent } from 'src/app/pages/new-admin-dialog/new-admin-dialog.component';
import { CustomValidators } from 'src/app/pages/register/custom.validators';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-change-password-dialog',
  templateUrl: './change-password-dialog.component.html',
  styleUrls: ['./change-password-dialog.component.css']
})
export class ChangePasswordDialogComponent {
  adminData = {};

  constructor(private service: ApiService, private dialogRef: MatDialogRef<ChangePasswordDialogComponent>) { }

  passwordForm = new FormGroup({
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      CustomValidators.patternValidator(/\d/, { shouldHaveNum: true }),
      CustomValidators.patternValidator(/[A-Z]/, { shouldHaveUpper: true }),
      CustomValidators.patternValidator(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/, { shouldHaveSpecial: true }),
    ]),
    passowrdConfirmation: new FormControl(),
  }, CustomValidators.passwordMatchValidator);

  submit() {
    const updatedUser = {
      "name": null,
      "password": this.password.value
    }

    this.service.updateUser(updatedUser)
      .subscribe(res => {
        console.log(res);
        this.dialogRef.close(res);

      });
  }

  get password() {
    return this.passwordForm['controls'].password;
  }

  get passowrdConfirmation() {
    return this.passwordForm['controls'].passowrdConfirmation;
  }

}
