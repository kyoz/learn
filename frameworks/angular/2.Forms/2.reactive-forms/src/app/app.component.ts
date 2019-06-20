import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-simple-form></app-simple-form>
    <app-grouped-form></app-grouped-form>
    <app-nested-form></app-nested-form>
    <app-form-builder></app-form-builder>
    <app-form-array></app-form-array>
  `
})
export class AppComponent {
}
