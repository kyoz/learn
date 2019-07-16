import { createSelector, createFeatureSelector } from '@ngrx/store';
import { LoggerState } from './logger.state';

const visitCouter = createFeatureSelector<LoggerState>('logger');

export const infoMessage = createSelector(
  visitCouter,
  logger => logger.infoMessage
);

