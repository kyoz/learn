import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-core',
  template: `
    <p>
      test core component works!
    </p>
  `,
  styles: []
})
export class CoreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
