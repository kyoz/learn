import { Directive } from '@angular/core';
import { FormGroup, ValidationErrors, ValidatorFn, Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

export function matchPasswordsValidator(control: FormGroup | AbstractControl): ValidationErrors | null {
  const password = control.get('password.password');
  const confirmPassword = control.get('password.confirm');

  return password && confirmPassword && password.value !== confirmPassword.value ?
    { notMatch: true } :
    null
}

