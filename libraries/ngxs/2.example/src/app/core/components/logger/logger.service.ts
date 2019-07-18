import { Injectable } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { AddLog, ResetLog } from '../../store/logger/logger.actions';
import { LoggerState } from '../../store/logger/logger.state';
import { Log } from '../../models/log';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoggerService {

  @Select(LoggerState.getLogs) logs$: Observable<Log[]>;

  constructor(private store: Store) { }

  addLog(message: string) {
    this.store.dispatch(new AddLog({
      message,
      createdTime: new Date()
    }));
  }

  resetLog() {
    this.store.dispatch(new ResetLog());
  }
}
