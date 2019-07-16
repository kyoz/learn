import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../core/store';
import { add, subtract, addRandom, reset } from '../../core/store/counter';
import { count } from '../../core/store/counter';

@Injectable({ providedIn: 'root' })
export class CounterService {
  count$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.count$ = this.store.pipe(select(count));
  }

  add(value: number) {
    this.store.dispatch(add(value));
  }

  subtract(value: number) {
    this.store.dispatch(subtract(value));
  }

  addRandom() {
    this.store.dispatch(addRandom());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
