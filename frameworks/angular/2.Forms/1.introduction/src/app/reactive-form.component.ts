import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  template: `
  <h2>Reactive Form</h2>
  <hr>

  Color: <input type="text" [formControl]="colorControl"><button (click)="test()">Test</button>
  `
})
export class ReactiveFormComponent {
  colorControl: FormControl = new FormControl('');

  test() {
    console.log(this.colorControl);
  }
}

