import { Component, forwardRef, SkipSelf, Optional } from '@angular/core';

export abstract class Parent {}

export function provideParent(component: any, parentType?: any) {
  return { provide: parentType || Parent, useExisting: forwardRef(() => component )};
}

@Component({
  selector: 'find-a-parent-with-skipself',
  template: '<find-a-parent-with-skipself-child></find-a-parent-with-skipself-child>',
  providers: [ provideParent(FindAParentWithSkipselfComponent) ]
})
export class FindAParentWithSkipselfComponent {
  variable = 'Parent';

  constructor(
    @SkipSelf() @Optional() private parent: Parent
  ) {
    console.log('[Parent]: ', this.parent);
  }
}

@Component({
  selector: 'find-a-parent-with-skipself-child',
  template: `
    <div>This is child component</div>
    <find-a-parent-with-skipself-smallest-child></find-a-parent-with-skipself-smallest-child>
  `,
  providers: [ provideParent(FindAParentWithSkipselfComponent) ]
})
export class FindAParentWithSkipselfChildComponent {
  variable = 'Child';

  constructor(
    @Optional() private parent: Parent
  ) {
    console.log('[Child]: ', this.parent);
  }
}

@Component({
  selector: 'find-a-parent-with-skipself-smallest-child',
  template: '<div>This is smallest child component</div>',
  providers: [ provideParent(FindAParentWithSkipselfChildComponent) ]
})
export class FindAParentWithSkipselfSmallestChildComponent {
  constructor(
    @Optional() private parent: Parent
  ) {
    console.log('[Smallest Child]', this.parent);
  }
}

