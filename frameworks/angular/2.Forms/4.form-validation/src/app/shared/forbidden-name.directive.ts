import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidatorFn } from '@angular/forms';

export function forbiddenNameValidator(regExp: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = regExp.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value }} : null;
  };
}

@Directive({
  selector: '[appForbiddenName]',
  providers: [
    {
      provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true
    }
  ]
})
export class ForbiddenValidatorDirective {
  @Input('appForbiddenName') forbiddenName: string;

  validate(control: AbstractControl): {[key: string]: any} | null {
    return this.forbiddenName ?
      forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control) :
      null;
  }

}
