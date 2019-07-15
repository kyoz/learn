import { Store, select } from '@ngrx/store';
import { Component } from '@angular/core';
import { increment, decrement, reset } from './counter.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'counter',
  template: `
    <button id="increment" (click)="increment()">Increment</button>
    <div>Current Count: {{ count$ | async }}</div>
    <button id="decrement" (click)="decrement()">Decrement</button>
    <button id="reset" (click)="reset()">Reset Counter</button>
  `
})
export class CounterComponent {
  count$: Observable<number>

  constructor(private store: Store<{ counter: number }>) {
    this.count$ = store.pipe(select('counter'));
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}

