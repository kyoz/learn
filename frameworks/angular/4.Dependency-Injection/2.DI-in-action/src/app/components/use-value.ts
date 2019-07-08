import { Component, Inject, Input, Injectable, InjectionToken } from '@angular/core';

const USE_VALUE = 'Hihihi';
const USE_VALUE_INJECTABLE = new InjectionToken<string>('Injectable Value');

@Injectable()
export class UseValueService {
  constructor() {
    console.log('[USE VALUE SERVICE] INIT');
  }
}

@Injectable()
export class UseValueWithTokenService {
  constructor() {
    console.log('[USE VALUE SERVICE] INIT');
  }
}

@Component({
  selector: 'use-value',
  template: `
    <use-value-child name="One"></use-value-child>
    <use-value-child name="Two"></use-value-child>
    <use-value-child name="Three"></use-value-child>
  `
})
export class UseValueComponent {
}

@Component({
  selector: 'use-value-child',
  template: `
    <div>{{ name }}</div>
  `,
  providers: [
    { provide: UseValueService, useValue: USE_VALUE },
    { provide: USE_VALUE_INJECTABLE, useValue: 'This is injected value' }
  ]
})
export class UseValueChildComponent {
  @Input() name: string;

  constructor(
    private _useValue: UseValueService,
    @Inject(USE_VALUE_INJECTABLE) private _injectValue: string
  ) {
    console.log(this._useValue);
    console.log(this._injectValue);
  }
}
