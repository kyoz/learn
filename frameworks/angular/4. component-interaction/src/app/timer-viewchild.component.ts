import { Component, ViewChild } from '@angular/core';
import { ChildTimerComponent } from './child-timer.component';

@Component({
  selector: 'app-timer-viewchild',
  template: `
    <h3>Timers</h3>
    <app-child-timer [name]="'Timer (via ViewChild)'"></app-child-timer>
    <p>
      <button (click)="start()">Start</button>
      <button (click)="stop()">Stop</button>
    </p>
  `
})
export class TimerViewChildComponent {
  @ViewChild(ChildTimerComponent, {static: false})
    private childTimer: ChildTimerComponent;

  start() { this.childTimer.start() };
  stop() { this.childTimer.stop() };
}

