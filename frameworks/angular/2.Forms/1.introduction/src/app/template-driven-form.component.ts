import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  template: `
  <h2>Template Driven Form</h2>
  <hr>

  Color: <input type="text" [(ngModel)]="color"><button (click)="test()">Test</button>
  `
})
export class TemplateDrivenFormComponent {
  color: string = '';

  test() {
    console.log(this.color);
  }
}

