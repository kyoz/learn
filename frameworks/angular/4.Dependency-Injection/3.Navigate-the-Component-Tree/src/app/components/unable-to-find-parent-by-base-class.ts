import { Component, Optional } from '@angular/core';

@Component({
  selector: 'base',
  template: '<div>This is base compoennt</div>'
})
export class BaseComponent {
  constructor() {
    console.log('[BaseComponent] Init');
  }
}

@Component({
  selector: 'unable-to-find-parent-by-base-class-child',
  template: '<div>This is child component</div>'
})
export class UnableToFindParentByBaseClassChildComponent extends BaseComponent {
  constructor(
    @Optional() private parent: UnableToFindParentByBaseClassComponent,
    @Optional() private parentFromBase: BaseComponent
  ) {
    super();
    console.log('Find parent use base class: ', this.parentFromBase);
    console.log('Find parent use concrete class: ', this.parent);
  }
}

@Component({
  selector: 'unable-to-find-parent-by-base-class',
  template: `
    <unable-to-find-parent-by-base-class-child></unable-to-find-parent-by-base-class-child>
  `
})
export class UnableToFindParentByBaseClassComponent {
  variable1 = 'One';

  test() {
    console.log('Just a test function');
  }
}

