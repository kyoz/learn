import { Component, Inject, Injectable, InjectionToken } from '@angular/core';

export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
  providedIn: 'root',
  factory: () => localStorage
});

@Injectable({
  providedIn: 'root'
})
export class BrowserStorageService {
  constructor(@Inject(BROWSER_STORAGE) public storage: Storage) {
    console.log('[BrowserStorageService] Inited !')
  }

  get (key: string) {
    this.storage.getItem(key);
  }

  set (key: string, value: string) {
    this.storage.setItem(key, value);
  }

  remove (key: string) {
    this.storage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }
}

@Component({
  selector: 'custom-provider',
  template: `
    Hihihi
  `
})
export class CustomProviderComponent {
  constructor(private _storage: BrowserStorageService) {
  }
}

