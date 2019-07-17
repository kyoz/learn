import { Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'counter',
  template: `
    <h2>Counter</h2>
    <hr>
    <div>
      Amout: <input #amount type="number" value="2">
    </div>

    <div>Value: {{ counter.value$ | async }}</div>

    <div>
      <button (click)="add(+amount.value)">Add</button>
      <button (click)="subtract(+amount.value)">Subtract</button>
      <button (click)="counter.addRandom()">Add random</button>
      <button (click)="counter.reset()">Reset</button>
    </div>
  `
})
export class CounterComponent {
  constructor(public counter: CounterService) {
  }

  add(value: number) {
    this.counter.add(value);
  }

  subtract(value: number) {
    this.counter.subtract(value);
  }
}

