import { Action, createReducer, on } from '@ngrx/store';

import { add, subtract, reset } from './counter.actions';
import { CounterState } from './counter.state';

const defaultState = {
  count: 0
};

const reducer = createReducer(
  defaultState,
  on(add, (state, { payload }) => ({
    ...state,
    count: state.count + payload.value
  })),
  on(subtract, (state, { payload }) => ({
    ...state,
    count: state.count - payload.value
  })),
  on(reset, (state) => ({
    ...state,
    count: 0
  }))
);

export function counterReducer(state: CounterState | undefined, action: Action) {
  return reducer(state, action);
}

