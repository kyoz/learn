import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-simple-form></app-simple-form>
    <app-grouped-form></app-grouped-form>
    <app-nested-form></app-nested-form>
  `
})
export class AppComponent {
}
