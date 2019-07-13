import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'enter-leave-animation-component',
  template: `
    <h2>Enter leave animation</h2>
    <div @flyInOut *ngIf="show">Hello seatle</div>
    <button (click)="show=!show">toggle</button>
    <hr>
  `,
  animations: [
    trigger('flyInOut', [
      state('in', style({
        transform: 'translateX(0)'
      })),
      transition(':enter', [
        style({
          transform: 'translate(-100%)'
        }),
        animate(500)
      ]),
      transition(':leave', [
        animate(200, style({
          transform: 'translateX(100%)'
        }))
      ])
    ])
  ]
})
export class EnterLeaveAnimationComponent {
  show = false;
}

