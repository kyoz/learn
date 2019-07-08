import { Component } from '@angular/core';
import { BrowserStorageService } from '../services/browser-storage.service';

@Component({
  selector: 'custom-provider',
  template: `
    Open the inspector to see logs
  `
})
export class CustomProviderComponent {
  constructor(private _storage: BrowserStorageService) {
  }
}

