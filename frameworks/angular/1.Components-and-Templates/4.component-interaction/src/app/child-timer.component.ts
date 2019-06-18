import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-timer',
  template: `
    <div>
      Child Timer: {{ message }}
    </div>
  `,
  styles: [`
    div {
      background: #e0e0e0;
    }
  `]
})
export class ChildTimerComponent {
  @Input() name = 'timer';

  message: string;
ngOnInit() {
  }

  start() {
    console.log(`start ${this.name}`);
  }

  stop() {
    console.log(`stop ${this.name}`);
  }
}

