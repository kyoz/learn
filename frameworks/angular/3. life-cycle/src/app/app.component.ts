import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>Test Angular Life Cycle:</div>
    <hr>
    <app-parent [data]="'testData'"></app-parent>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'life-cycle';
}
