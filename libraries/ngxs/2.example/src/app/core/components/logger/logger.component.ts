import { Component } from '@angular/core';
import { LoggerService } from './logger.service';

@Component({
  selector: 'logger',
  template: `
  <h2>Logger</h2>
  <hr>
  <div *ngFor="let log of logger.logs$ | async">
    {{ log.message }}
  </div>

  <button (click)="logger.resetLog()">Clear logs</button>
  `
})
export class LoggerComponent {
  constructor(public logger: LoggerService) { }
}

