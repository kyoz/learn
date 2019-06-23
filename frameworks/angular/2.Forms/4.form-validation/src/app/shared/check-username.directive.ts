import { Directive, forwardRef, Injectable } from '@angular/core';
import { AsyncValidator, AbstractControl, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UsernameService } from './username.service';

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

