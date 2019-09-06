import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-library-one',
  template: `
    <p>
      library-one component works!
    </p>
  `,
  styles: []
})
export class LibraryOneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
