import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../shared/forbidden-name.directive';
import { matchPasswordsValidator } from '../shared/match-password-reactive.directive';
import { CheckUsernameValidator } from '../shared/check-username.directive';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {

  form = this.formBuilder.group({
    username: ['',
      {
        validators: [
          Validators.required,
          Validators.minLength(2),
          forbiddenNameValidator(/Kyoz/i)
        ],
        asyncValidators: [
          this.checkUsernameValidator.validate.bind(this.checkUsernameValidator)
        ],
        updateOn: 'blur'
      }
    ],
    password: this.formBuilder.group({
      password: ['', [Validators.required]],
      confirm: ['', [Validators.required]]
    })
  }, { validators: matchPasswordsValidator });

  get username() { return this.form.get('username') };
  get password() { return this.form.get('password.password') };
  get confirmPassword() { return this.form.get('password.confirm'); };

  constructor(
    private formBuilder: FormBuilder,
    private checkUsernameValidator: CheckUsernameValidator
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form);
  }
}
