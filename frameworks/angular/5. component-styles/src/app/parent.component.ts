import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <div class="container">
      This is parent component
      <app-child class="child"></app-child>
    </div>
  `,
  styles: [`
    .container { color: red }
  `]
})
export class ParentComponent {
  
}

