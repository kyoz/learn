import { Component, Inject, Input, InjectionToken } from '@angular/core';

class ValueClass {
  constructor() {
  }
}

export const FACTORY_VALUE = new InjectionToken<string>('Factory value');

export function factoryFunction() {
  console.log('Into factoryFunction()');

  return (values: string[]): string => {
    return values[0];
  }
}

export const Values = ['One', 'Two'];

@Component({
  selector: 'use-factory',
  template: `
    <use-factory-child name="One"></use-factory-child>
    <use-factory-child name="Two"></use-factory-child>
    <use-factory-child name="Three"></use-factory-child>
  `
})
export class UseFactoryComponent {
}

@Component({
  selector: 'use-factory-child',
  template: `
    <div>{{ name }}</div>
  `,
  providers: [
    { provide: ValueClass, useValue: Values },
    {
      provide: FACTORY_VALUE,
      useFactory: factoryFunction(),
      deps: [ValueClass]
    }
  ]
})
export class UseFactoryChildComponent {
  @Input() name: string;

  constructor(@Inject(FACTORY_VALUE) private factoryValue: string) {
    console.log(this.factoryValue);
  }
}
