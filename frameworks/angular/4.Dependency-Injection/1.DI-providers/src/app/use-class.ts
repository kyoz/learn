import { Component } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable()
export class UseClassLogger {
  token = +new Date();

  constructor() {
    console.log('[USECLASS_LOGGER] init: ' + this.token);
  }

  test() {
    console.log('[USECLASS_LOGGER] Test')
  }

  log(message: string) {
    console.log('[USECLASS_LOGGER]' + message);
  }
}

@Injectable()
export class UseClassBetterLogger {
  token = +new Date();

  constructor() {
    console.log('[USECLASS_BETTER_LOGGER] init: ' + this.token);
  }

  log(message: string) {
    console.log('[USECLASS_BETTER_LOGGER]' + message);
  }
}

@Component({
  selector: 'use-class',
  template: `
    <div>
      <button *ngIf="!showExample" (click)="showExample = true">Show Component 1</button>
      <use-class-child *ngIf="showExample"></use-class-child>

      <button *ngIf="!showExample2" (click)="showExample2 = true">Show Component 2</button>
      <use-class-child *ngIf="showExample2"></use-class-child>
    </div>
  `,
  providers: [UseClassBetterLogger]
})
export class UseClassComponent {
  showExample = false;
  showExample2 = false;
}


@Component({
  selector: 'use-class-child',
  template: `
    <div>
      <h3>useClass</h3>
      <hr>
      <button (click)="test()">Test</button>
    </div>
  `,
  providers: [
    { provide: UseClassLogger, useClass: UseClassBetterLogger }
  ]
})
export class UseClassChildComponent {
  constructor(private _logger: UseClassLogger) {
  }

  test() {
    this._logger.log('Test');
  }
}

