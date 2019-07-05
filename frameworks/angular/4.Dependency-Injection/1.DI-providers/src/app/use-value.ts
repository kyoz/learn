import { Component, Injectable } from '@angular/core';

export function silentLoggerFn() {
  console.log('This is SilentLoggerFn function');
}

const silentLogger = {
  logs: ['This is silent logger', 'Provided vie useValue'],
  log: silentLoggerFn
}

interface APIConfig {
  apiEndpoint: string;
  title: string;
}

export const LOGGER_DI_CONFIG: APIConfig = {
  apiEndpoint: 'api.logger.com',
  title: 'Better Logger'
};

@Injectable()
export class useValueLogger {
  constructor() {
    console.log('[USE_VALUE_LOGGER] init');
  }
}

@Component({
  selector: 'use-value',
  template: `
    <button (click)="test()">Test</button>
  `,
  providers: [
    { provide: useValueLogger, useValue: silentLogger }
    // This not work, can't use interface as a token
    //[{ provide: useValueLogger, useValue: LOGGER_DI_CONFIG })]
  ]
})
export class UseValueComponent {
  constructor(private _logger: useValueLogger) {}

  // FAIL if use LOGGER_DI_CONFIG! Can't inject using the interface as the parameter type
  // constructor(private config: useValueLogger){ }

  test() {
    const logger: any = this._logger;
    console.log(this._logger);
    console.log(logger.logs);
    logger.log();
  }
}

