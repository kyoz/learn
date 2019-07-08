import { Component, Injectable, Input } from '@angular/core';

@Injectable()
export class HeroService {
  constructor() {
    console.log('This is HeroService instance: ' + +new Date());
  }
}

@Component({
  selector: 'hero',
  template: `
    <div>This is hero {{ id }}</div>
  `,
  providers: [HeroService] // This will create one service instance of one component
})
export class HeroComponent {
  @Input() id: string;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    console.log('This is component ' + this.id);
  }
}

@Component({
  selector: 'multiple-service-instances',
  template: `
    <hero id="1"></hero>
    <hero id="2"></hero>
    <hero id="3"></hero>
  `,
  // This will create one instance of service, and all child components doesn't
  // have to create new instance, they can use this one
  // providers: [HeroService]
})
export class MultipleServiceInstances {
  
}

