import { Component, Input, Injectable } from '@angular/core';

@Injectable()
export class UseClassService {
  constructor() {
    console.log('[USE CLASS SERVICE] INIT');
  }

  test() {}
}

@Injectable()
class UseClassExtendService {
  constructor() {
    console.log('[USE CLASS EXTEND SERVICE] INIT: ' + +new Date());
  }

  test() {
    console.log('[USE CLASS EXTEND SERVICE] TEST');
  }
}

@Component({
  selector: 'use-class',
  template: `
    <use-class-child name="One"></use-class-child>
    <use-class-child name="Two"></use-class-child>
    <use-class-child name="Three"></use-class-child>
  `,
  providers: [ UseClassService ] // Although the UseClassService is place here but all child of it will create instance for UseClassExtendService
})
export class UseClassComponent {
}

@Component({
  selector: 'use-class-child',
  template: `
    <div>{{ name }}</div>
  `,
  providers: [
    { provide: UseClassService, useClass: UseClassExtendService }
  ]
})
export class UseClassChildComponent {
  @Input() name: string;

  constructor(private _useClass: UseClassService) {
    this._useClass.test();
  }
}
