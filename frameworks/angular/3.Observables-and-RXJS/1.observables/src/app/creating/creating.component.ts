import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-creating',
  templateUrl: './creating.component.html',
  styleUrls: ['./creating.component.scss']
})
export class CreatingComponent {
  logs: string[] = [];

  constructor() { }

  createWithConstructor() {
    const sequence = new Observable(this.sequenceSubscriber);

    sequence.subscribe(
      x => this.logs.push(`[Creating with constructor] Next value: ${x}`),
      err => this.logs.push(`[Creating with constructor] Error: ${err}`),
      () => this.logs.push(`[Creating with constructor] Completed`)
    );
  }

  createWithCustomFromEventFunction() {
    const ESC_KEY = 27;
    const nameInput = document.getElementById('name') as HTMLInputElement;

    const subscription = this.fromEvent(nameInput, 'keydown')
      .subscribe((e: KeyboardEvent) => {
        this.logs.push(`Pressed: ${e.key}`);
        if (e.keyCode === ESC_KEY) {
          nameInput.value = '';
        }
      });
  }

  sequenceSubscriber(observer: Observer<number>) {
    let countValue = 1;
    const interval = setInterval(() => {
      observer.next(countValue);

      if (countValue === 3) {
        observer.complete();
        clearInterval(interval);
      }
      countValue++;
    }, 700);

    return { unsubscribe() {}};
  }

  fromEvent(target, eventName) {
    return new Observable(observer => {
      const handler = (e) => observer.next(e);

      target.addEventListener(eventName, handler);

      return () => {
        target.removeEventListener(eventName, handler);
      }
    });
  }

  clearLogs() {
    this.logs = [];
  }
}
