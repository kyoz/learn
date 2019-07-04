import { Component } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable()
export class UseExistingLogger {
  token = +new Date();

  constructor() {
    console.log('[USE_EXISTING_LOGGER] init: ' + this.token);
  }

  test() {
    console.log('[USE_EXISTING_LOGGER] Test')
  }

  log(message: string) {
    console.log('[USE_EXISTING_LOGGER]' + message);
  }
}

@Injectable()
export class UseExistingBetterLogger {
  public token = +new Date();

  constructor() {
    console.log('[USE_EXISTING_BETTER_LOGGER] init: ' + this.token);
  }

  log(message: string) {
    console.log('[USE_EXISTING_BETTER_LOGGER]' + message);
  }
}

@Component({
  selector: 'use-existing',
  template: `
    <div style="padding-left: 56px">
      <button *ngIf="!showExample" (click)="showExample = true">Show Component 1</button>
      <use-existing-child *ngIf="showExample"></use-existing-child>

      <button *ngIf="!showExample2" (click)="showExample2 = true">Show Component 2</button>
      <use-existing-child *ngIf="showExample2"></use-existing-child>
    </div>
  `,
  providers: [
    UseExistingBetterLogger
  ]
})
export class UseExistingComponent {
  showExample: false;
  showExample2: false;
}


@Component({
  selector: 'use-existing-child',
  template: `
    <div>
      <h3>Component with ID: {{ _logger.token }}</h3>
      <hr>
      <button (click)="test()">Test</button>
    </div>
  `,
  providers: [
    { provide: UseExistingLogger, useExisting: UseExistingBetterLogger}
  ]
})
export class UseExistingChildComponent {
  constructor(private _logger: UseExistingLogger) {
  }

  test() {
    this._logger.log('Test');
  }
}

