import { createAction, props } from '@ngrx/store';

export const logInfo = createAction(
  '[Logger] Log info',
  (message = 'Default log info') => ({ message })
);

