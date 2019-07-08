import { Component, Self, SkipSelf } from '@angular/core';
import { BROWSER_STORAGE, BrowserStorageService } from '../services/browser-storage.service';

@Component({
  selector: 'modify-provider-search',
  template: `
    <div>Open the inspector to see:</div>
    <button (click)="setSection()">Set section</button>
    <button (click)="setLocal()">Set local</button>
  `,
  providers: [
    BrowserStorageService,
    {
      provide: BROWSER_STORAGE,
      useFactory: () => sessionStorage
    }
  ]
})
export class ModifyProviderSearchComponent {
  constructor(
    // @Self: Tell the DI frameworks to start dependency resolution from the local injector
    // @SkipSelf: Tell the DI frameworks to start dependency resolution from the parent injector (skip this local injector)
    @Self() private sessionStorageService: BrowserStorageService,
    @SkipSelf() private localStorageService: BrowserStorageService
  ) {
  }

  setSection() {
    this.sessionStorageService.set('hero', 'Kyoz');
    console.log(`yay... we'v set & get "${sessionStorage.getItem('hero')}" in sessionStorage`);
  }

  setLocal() {
    this.localStorageService.set('hero', 'Saitama');
    console.log(`yay... we'v set & get "${localStorage.getItem('hero')}" in localStorage`)
  }
}

