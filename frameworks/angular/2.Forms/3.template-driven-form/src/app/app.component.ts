import { Component } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  powers = ['Strong', 'Smart', 'Fast', 'Invincible'];

  formModel: Hero = new Hero(1, 'Kyoz', this.powers[0], 'Hello World');
  testFormModel;

  resetForm() {
    this.formModel = new Hero(1, '', '', '');
  }

  onFormSubmit() {
    console.log(this.formModel);
  }
}
