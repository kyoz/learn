import { Directive } from '@angular/core';
import { FormGroup, ValidationErrors, ValidatorFn, Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

// If using with reactive form, only need this function
// But if want to use with template driven form, must declare a directive as below
export function matchPasswordsValidator(control: FormGroup | AbstractControl): ValidationErrors | null {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  return password && confirmPassword && password.value !== confirmPassword.value ?
    { notMatch: true } :
    null
}

@Directive({
  selector: '[matchPassword]',
  providers: [
    {
      provide: NG_VALIDATORS, useExisting: MatchPasswordValidatorDirective, multi: true
    }
  ]
})
export class MatchPasswordValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors {
    return matchPasswordsValidator(control);
  }
}

