import { createAction, props } from '@ngrx/store';

export const homeScore = createAction('[Scoreboard] Home Score');
export const awayScore = createAction('[Scoreboard] Away Score');
export const resetScore = createAction('[Scoreboard] Reset Score');
export const setScore = createAction('[Scoreboard] Set Score',
  props<{ home: number, away: number}>()
);

