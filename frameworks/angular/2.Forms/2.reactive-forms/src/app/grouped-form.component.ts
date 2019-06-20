import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-grouped-form',
  template: `
    <h2>Grouped Form Control</h2>
    <hr>
    <form [formGroup]="loginForm" (ngSubmit)="submitForm()">

      <div>
        Username: <input type="text" formControlName="username"/>
      </div>
      <div>
        Password: <input type="password" formControlName="password"/>
      </div>

      <button type="submit">Submit</button>

      <div>{{ loginForm.value | json }}</div>
    </form>
  `
})
export class GroupedFormComponent {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  submitForm() {
    console.log('------------------------------------------------------------');
    console.log('form', this.loginForm);
    console.log('username', this.loginForm.get('username').value);
    console.log('password', this.loginForm.get('password').value);
  }
}

