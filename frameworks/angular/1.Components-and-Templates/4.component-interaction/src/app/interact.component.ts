import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-interact',
  template: `
    {{ name }}
  `
})
export class InteractComponent {
  private privateName = '';
  @Input()
  set name(name: string) {
    this.privateName = 'Private Name: ' + name;
  }

  get name(): string {
    return this.privateName;
  }
}

