import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { login, reset } from './login.action';

@Component({
  selector: 'login',
  template: `
    <div>Username: <input name="id" [(ngModel)]="username"> </div>
    <div>Password: <input name="pass" type="password" [(ngModel)]="password"> </div>
    <button (click)="login()">Login</button>
    <button (click)="reset()">Reset</button>
    <div>Login data: {{ login$ | async | json }}</div>
  `
})
export class LoginComponent {
  username;
  password;

  login$: Observable<{ username: string, password: string }>;

  constructor(private store: Store<{ login: any }>) {
    this.login$ = store.pipe(select('login'));
  }

  login() {
    this.store.dispatch(login({
      username: this.username,
      password: this.password
    }));
  }

  reset() {
    this.store.dispatch(reset());
  }
}

