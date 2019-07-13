import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'keyframe-animation-component',
  template: `
    <h2>Keyframes animation</h2>
    <div @flyInOut *ngIf="show">Hello seatle</div>
    <button (click)="show=!show">toggle</button>
    <hr>
  `,
  animations: [
    trigger('flyInOut', [
      state('in', style({
        color: 'red'
      })),
      transition(':enter', [
        animate(1500, keyframes([
          style({ color: 'blue' }),
          style({ color: 'grey' }),
          style({ color: 'pink' }),
        ]))
      ]),
      transition(':leave', [
        animate(1500, keyframes([
          style({ color: 'blue' }),
          style({ color: 'grey' }),
          style({ color: 'pink' }),
        ]))
      ])
    ])
  ]
})
export class KeyframesAnimationComponent {
  show = false;
}

