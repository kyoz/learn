import { ActionReducerMap } from '@ngrx/store';

import { LoggerState, loggerReducer } from './logger';
import { CounterState, counterReducer } from './counter';

export interface AppState {
  logger: LoggerState;
  counter: CounterState;
}

export const appReducers: ActionReducerMap<AppState> = {
  logger: loggerReducer,
  counter: counterReducer
};

