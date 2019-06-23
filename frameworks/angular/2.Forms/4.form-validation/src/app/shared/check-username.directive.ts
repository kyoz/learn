import { Directive, forwardRef, Injectable } from '@angular/core';
import {
  AsyncValidator,
  AbstractControl,
  NG_ASYNC_VALIDATORS,
  ValidationErrors,
  Validator
} from '@angular/forms';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UsernameService } from './username.service';

// If using with reactive form, only need this service
// But if want to use with template driven form, must declare a directive as below

@Injectable({ providedIn: 'root' })
export class CheckUsernameValidator implements AsyncValidator {
  constructor(private usernameService: UsernameService) {}

  validate(ctrl: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.usernameService.isExistUsername(ctrl.value).pipe(
      map(isExist => (!isExist ? { notExistUsername: true } : null)),
      catchError(() => null)
    );
  }
}

@Directive({
  selector: '[appCheckUsername]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => CheckUsernameValidator),
      multi: true
    }
  ]
})
export class CheckUsernameValidatorDirective implements Validator {
  constructor(private validator: CheckUsernameValidator) {}

  validate(control: AbstractControl): ValidationErrors {
    return this.validator.validate(control);
  }
}

