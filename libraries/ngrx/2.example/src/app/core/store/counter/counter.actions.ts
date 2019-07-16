import { createAction, props } from '@ngrx/store';

export const add = createAction(
  '[Counter] Add value',
  (value = 0) => ({ payload: { value } })
);

export const addRandom = createAction(
  '[Counter] Add random'
);

export const subtract = createAction(
  '[Counter] Subtract value',
  (value = 0) => ({ payload: { value }})
);

export const reset = createAction('[Counter] Reset');
