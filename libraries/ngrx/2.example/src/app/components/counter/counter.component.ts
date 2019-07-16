import { Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'counter',
  template: `
    <h2>Counter</h2>
    <hr>

    <div>
      Amout: <input #number type="number" value="1">
    </div>

    <div>Current value: {{ counter.count$ | async }}</div>

    <div>
      <button (click)="add(number.value)">Add</button>
      <button (click)="subtract(number.value)">Subtract</button>
      <button (click)="addRandom()">Add random</button>
      <button (click)="reset()">Reset</button>
    <div>
  `
})
export class CounterComponent {
  constructor(public counter: CounterService) {
  }

  add(value: number) {
    this.counter.add(+value);
  }

  subtract(value: number) {
    this.counter.subtract(+value);
  }

  addRandom() {
    this.counter.addRandom();
  }

  reset() {
    this.counter.reset();
  }
}

