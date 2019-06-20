import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  template: `
    <h2>Simple Form</h2>
    <hr>
    Name: <input type="text" [formControl]="nameCtrl"/>
    <div>{{ nameCtrl.value }}</div>
    <div><button (click)="setNewValue()">Set new value</button></div>
  `
})
export class SimpleFormComponent {
  nameCtrl: FormControl = new FormControl('');

  setNewValue() {
    this.nameCtrl.setValue('Kyoz');
  }
}

