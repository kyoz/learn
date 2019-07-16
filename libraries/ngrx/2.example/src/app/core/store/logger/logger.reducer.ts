import { Action, createReducer, on } from '@ngrx/store';
import { LoggerState } from './logger.state';
import { logInfo } from './logger.actions';

const defaultState = {
  infoMessage: []
};

const reducer = createReducer<LoggerState>(
  defaultState,
  on(logInfo, (state, { message }) => ({
    ...state,
    infoMessage: [...state.infoMessage, message]
  }))
);

export function loggerReducer(state: LoggerState | undefined, action: Action) {
  return reducer(state, action);
}
