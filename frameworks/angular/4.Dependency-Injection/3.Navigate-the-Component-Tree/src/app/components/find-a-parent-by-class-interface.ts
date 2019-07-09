import { Component, Optional, forwardRef } from '@angular/core';

export abstract class Parent { name: string; }

@Component({
  selector: 'find-a-parent-by-class-interface-child',
  template: '<div>This is a child component</div>',
  providers: [
    { provide: Parent, useExisting: forwardRef(() => FindAParentByClassInterfaceComponent)}
  ]
})
export class FindAParentByClassInterfaceChildComponent {
  constructor(
    @Optional() private parent: Parent
  ) {
    console.log('Parent: ', this.parent);
  }
}

@Component({
  selector: 'find-a-parent-by-class-interface',
  template: `
    <find-a-parent-by-class-interface-child></find-a-parent-by-class-interface-child>
  `
})
export class FindAParentByClassInterfaceComponent {
  variable = 'Hihi';
}
