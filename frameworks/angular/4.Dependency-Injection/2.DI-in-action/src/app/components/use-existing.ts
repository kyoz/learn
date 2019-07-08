import { Component, Injectable, Input } from '@angular/core';

@Injectable()
export class UseExistingService {
  constructor() {
    console.log('[USE EXISTING SERVICE] INIT');
  }

  test() {}
}

class UseExistingExtendService {
  constructor() {
    console.log('[USE EXISTING EXTEND SERVICE] INIT: ' + +new Date());
  }

  test() {
    console.log('[USE EXISTING EXTEND SERVICE] TEST');
  }
}

@Component({
  selector: 'use-existing',
  template: `
    <use-existing-child name="One"></use-existing-child>
    <use-existing-child name="Two"></use-existing-child>
    <use-existing-child name="Three"></use-existing-child>
  `,
  providers: [UseExistingExtendService] // This will allow all child of this component will use just one instance of UseExistingExtendService
})
export class UseExistingComponent {
  
}

@Component({
  selector: 'use-existing-child',
  template: `
    <div>{{ name }}</div>
  `,
  providers: [
    { provide: UseExistingService, useExisting: UseExistingExtendService }
  ]
})
export class UseExistingChildComponent {
  @Input() name: string;

  constructor(private _useExisting: UseExistingService) {
    this._useExisting.test();
  }
}
