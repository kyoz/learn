import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, act } from '@ngrx/effects';

import { Observable, of, throwError} from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import { add, addRandom } from './counter.actions';
import { logInfo } from '../logger/logger.actions';

@Injectable()
export class CounterEffects {
  addRandom = createEffect(() => this.actions.pipe(
    ofType(addRandom),
    act({
      project: () => generateRandomValue().pipe(
        map(value => add(value))
      ),
      error: message => logInfo(message)
    })
  ));

  add = createEffect(() => this.actions.pipe(
    ofType(add),
    map(action => action.payload),
    mergeMap((payload) => of(logInfo(`[Effect] Add ${payload.value}`)))
  ));

  constructor(private actions: Actions) {}
}

function generateRandomValue(): Observable<number> {
  const randomValue = Math.floor(Math.random() * 10);

  if (randomValue < 5) {
    return throwError(`Random generated number should not be lesser than 5 (was ${randomValue})`);
  }

  return of(randomValue || 0);
}
