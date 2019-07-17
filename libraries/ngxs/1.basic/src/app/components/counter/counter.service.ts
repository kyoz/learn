import { Injectable } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CounterState } from '../../core/store/counter/counter.state';
import { Add, AddRandom, Subtract, Reset } from '../../core/store/counter/counter.actions';

@Injectable({ providedIn: 'root' })
export class CounterService {

  @Select(CounterState.getValue) value$: Observable<number>;

  constructor(private store: Store) { }

  add(value: number) {
    this.store.dispatch(new Add(value));
  }

  subtract(value: number) {
    this.store.dispatch(new Subtract(value));
  }

  addRandom() {
    this.store.dispatch(new AddRandom());
  }

  reset() {
    this.store.dispatch(new Reset());
  }
}
