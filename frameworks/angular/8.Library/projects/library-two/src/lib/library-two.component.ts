import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-library-two',
  template: `
    <p>
      library-two component works!
    </p>
  `,
  styles: []
})
export class LibraryTwoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
