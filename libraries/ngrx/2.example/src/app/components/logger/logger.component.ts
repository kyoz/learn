import { Component } from '@angular/core';
import { LoggerService } from './logger.service';

@Component({
  selector: 'logger',
  template: `
    <h2>Log monitor:</h2>
    <hr>

    <div *ngFor="let message of logger.infoMessage$ | async">
      {{ message }}
    </div>
  `
})
export class LoggerComponent {
  constructor(public logger: LoggerService) {
  }
}

