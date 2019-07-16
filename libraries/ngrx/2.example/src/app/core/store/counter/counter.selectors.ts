import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CounterState } from './counter.state';

const visitCounter = createFeatureSelector<CounterState>('counter');

export const count = createSelector(visitCounter, s => s.count);

