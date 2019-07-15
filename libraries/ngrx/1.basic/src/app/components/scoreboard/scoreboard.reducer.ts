import { createReducer, on, Action } from '@ngrx/store';
import * as ScoreboardActions from './scoreboard.actions';
import { Scoreboard } from './scoreboard';

const initialState: Scoreboard = {
  home: 0,
  away: 0
}

export const scoreboardReducer = createReducer(initialState,
  on(ScoreboardActions.homeScore, state => ({
    ...state,
    home: state.home + 1
  })),
  on(ScoreboardActions.awayScore, state => ({
    ...state,
    away: state.away + 1
  })),
  on(ScoreboardActions.resetScore, state => ({
    home: 0,
    away: 0
  })),
  on(ScoreboardActions.setScore, (state, payload: any) => ({
    home: payload.home,
    away: payload.away
  }))
);
