import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div class="container">This is child component</div>
  `,
  styles: [`
    .container { color: blue }

    :host {
      font-size: 30px;
    }

    // Or use :host(.class-exist-in-host)
    // :host(.child) {
    //   font-size: 30px;
    // }
  `]
})
export class ChildComponent {
  
}

