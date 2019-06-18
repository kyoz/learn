import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div *appUnless="false">false</div>
    <div *appUnless="true">true</div>
  `
})
export class AppComponent {
}
