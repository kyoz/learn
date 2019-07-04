import { Component } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Logger {
  constructor() {
    console.log('[LOGGER] init');
  }

  log(message: string) {
    console.log('[MAIN_LOG]' + message);
  }
}

@Injectable({ providedIn: 'root' })
export class BetterLogger extends Logger {
  constructor() {
    super();
    console.log('[BETTER_LOGGER] init');
  }

  log(message: string) {
    super.log('[BETTER_LOGGER]' + message);
  }
}

@Component({
  selector: 'class-provider-with-dependency',
  template: `
    <h2>Class providers with dependency</h2>
    <hr>
    <button (click)="test()">Test</button>
  `,
  styles: []
})
export class ClassProviderWithDependencyComponent {
  constructor(private _betterLogger: BetterLogger) {
  }

  test() {
    this._betterLogger.log('Test');
  }
}

