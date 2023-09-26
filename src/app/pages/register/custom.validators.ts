import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidators {

    static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            return !regex.test(control.value) ? error : null;
        };
    }

    static passwordMatchValidator(control: AbstractControl): any {
        const password = control.get('password')?.value;
        const confirmPassword = control.get('passowrdConfirmation')?.value;
        if (password !== confirmPassword) {
            control.get('passowrdConfirmation')?.setErrors({ mismatch: true });
        }
    }
}