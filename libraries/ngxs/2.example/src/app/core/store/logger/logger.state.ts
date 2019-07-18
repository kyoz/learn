import { Action, State, StateContext, Selector } from '@ngxs/store';
import { AddLog, ResetLog } from './logger.actions';
import { Log } from '../../models/log';

export class LoggerStateModel {
  logs: Log[];
}

@State<LoggerStateModel>({
  name: 'logger',
  defaults: {
    logs: []
  }
})
export class LoggerState {
  @Selector()
  static getLogs(state: LoggerStateModel) {
    return state.logs;
  }

  @Action(AddLog)
  log({ getState, patchState}: StateContext<LoggerStateModel>, action: AddLog) {
    const currentLogs = getState().logs;
    currentLogs.push(action.log);

    patchState({
      logs: currentLogs
    });
  }

  @Action(ResetLog)
  reset({ patchState }: StateContext<LoggerStateModel>) {
    patchState({
      logs: []
    });
  }
}
