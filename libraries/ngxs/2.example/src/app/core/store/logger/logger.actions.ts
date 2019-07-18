import { Log } from '../../models/log';

export class AddLog {
  static readonly type = '[LOGGER] Add Log';
  constructor(public log: Log) { }
}

export class ResetLog {
  static readonly type = '[LOGGER] Reset';
}

