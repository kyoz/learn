import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {

  form = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(2)]],
    password: this.formBuilder.group({
      password: ['', [Validators.required]],
      confirm: ['', [Validators.required]]
    })
  });

  get username() { return this.form.get('username') };
  get password() { return this.form.get('password.password') };
  get confirmPassword() { return this.form.get('password.confirm'); };

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form);
  }
}
