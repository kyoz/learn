import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[LOGIN] SIGN IN',
  props<{ username: string, password: string }>()
);
export const reset = createAction('[LOGIN] RESET');
