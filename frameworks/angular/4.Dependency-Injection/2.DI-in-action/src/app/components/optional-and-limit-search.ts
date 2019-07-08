import { Component, Injectable, Host, Optional } from '@angular/core';

@Injectable()
export class TireService {
  constructor() {
    console.log('[TIRE SERVICE] INITED !');
  }
}

@Injectable()
export class TireLogService {
  constructor() {
    console.log('[TIRE LOG SERVICE] INITED !');
  }
}


@Component({
  selector: 'tire',
  template: '<span style="color: blue">Tire ></span>',
  // If we provide TireService and TireLogService here, it'll absolutely work,
  // cause TireComponent is the first host component.
  // But since we projected TireComponent to CarComponent, CarComponent has become new
  // host component. But this's where we inject TireService and TireLogService,
  // so if we provide TireService and TireLogService here, i'll work without any problem
  // providers: [TireService, TireLogService]
})
export class TireComponent {
  constructor(
    @Host() private tireService: TireService,
    @Host() @Optional() private tireLogService: TireLogService
  ) {
    if (this.tireLogService) {
      console.log('TireLogService exist !');
    } else {
      console.log('Not found TireLogService !');
    }
  }
}

@Component({
  selector: 'car',
  template: '<span style="color: red">Car > </span><ng-content></ng-content>',
  // Because CarComponent project TireComponent to it. So it become the parent
  // component of the host. Thus, TireService still work if we inject it in 
  // CarComponent, if not projected TireComponent to CarComponent through
  // ng-content. The host component is TireComponent, so if we provides TireService
  // in CarComponent, the tireService instance can't be use
  providers: [TireService, TireLogService]
})
export class CarComponent {
  
}

@Component({
  selector: 'optional-and-limit-search',
  template: `
    <car>
      <tire></tire>
    </car>
  `
})
export class OptionalAndLimitSearch {
  constructor() {
  }
}

