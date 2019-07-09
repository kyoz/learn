import { Component, Optional } from '@angular/core';

@Component({
  selector: 'find-a-parent-of-known-type',
  template: `
    <find-a-parent-of-known-type-child></find-a-parent-of-known-type-child>
  `
})
export class FindAParentOfKnownTypeComponent {
  variable1 = 'One';
  variable2 = 'Two';

  test() {
    console.log(this.variable1);
  }
}

@Component({
  selector: 'find-a-parent-of-known-type-child',
  template: `
    This is child component
  `
})
export class FindAParentOfKnownTypeChildComponent {
  constructor(
    @Optional() private parentComponent: FindAParentOfKnownTypeComponent
  ) {
    console.log(this.parentComponent);
  }
}
