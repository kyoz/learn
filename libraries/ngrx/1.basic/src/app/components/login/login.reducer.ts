import { createReducer, on } from '@ngrx/store';
import { login, reset } from './login.action';

const initialState = {
  username: undefined,
  password: undefined
};

export const loginReducer = createReducer(initialState,
  on(login, (state, action) => {
    state.username = action.username;
    state.password = action.password;
    return state;
  }),
  on(reset, state => {
    state.username = undefined;
    state.password = undefined;
    return state;
  })
)

