import { Injectable, Component } from '@angular/core';

@Injectable()
export class LimitScopeService {
  constructor() {
    console.log('This service is just exist in this component');
  }
}


@Component({
  selector: 'limit-service-scope-to-a-component-subtree',
  template: `
    The service is limit only in this component
  `,
  providers: [LimitScopeService]
})
export class LimitServiceScopeToAComponentSubtreeComponent {
  constructor(private _limitScopeService: LimitScopeService) {

  }
}

