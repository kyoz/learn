import { Component, Injectable } from '@angular/core';

@Injectable()
export class ServiceOne {
  constructor() {
    console.log('[Service One] Init');
  }

  test() {
    console.log('[Service One] Test');
  }
}

export class ServiceTwo {
  constructor(private _serviceOne: ServiceOne) {
    console.log('[Service Two] Init');
    this._serviceOne.test();
  }
}

@Component({
  selector: 'nested-service-dependencies',
  template: `
    Inited
  `,
  providers: [ServiceOne, ServiceTwo]
})
export class NestedServiceDependenciesComponent {
  constructor(private _serviceTwo: ServiceTwo) {}
}

