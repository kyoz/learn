import { Component } from '@angular/core';
import { state, style, transition, animate, trigger } from '@angular/animations';

@Component({
  selector: 'basic-animation-component',
  template: `
    <h2>Basic animation</h2>
    <div [@openClose]="isOpen ? 'open' : 'close'">Animate me</div>
    <button (click)="isOpen=!isOpen">toggle</button>
    <hr>
  `,
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('close', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => close', [
        animate('1s ease-out')
      ]),
      transition('close => open', [
        animate('.5s ease-in')
      ])
    ])
  ]
})
export class BasicAnimationComponent {
  isOpen: false;
}

