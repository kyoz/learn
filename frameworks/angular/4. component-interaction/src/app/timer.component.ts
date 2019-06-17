import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  template: `
    <h3>Timers</h3>
    <div *ngFor="let timer of timerList">
      <hr>
      <app-child-timer #childTimer [name]="timer.name"></app-child-timer>
      <p>
        <button (click)="childTimer.start()">Start</button>
        <button (click)="childTimer.stop()">Stop</button>
      </p>
    </div>
  `
})
export class TimerComponent {
  timerList = [
    { id: 1, name: 'Timer 1' },
    { id: 2, name: 'Timer 2' },
    { id: 4, name: 'Timer 3' },
  ];
}

