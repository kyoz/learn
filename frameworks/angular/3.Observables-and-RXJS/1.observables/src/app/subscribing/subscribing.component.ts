import { Component } from '@angular/core';
import { of, Observer, Observable } from 'rxjs';
import { delay, concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-subscribing',
  templateUrl: './subscribing.component.html',
  styleUrls: ['./subscribing.component.scss']
})
export class SubscribingComponent {
  logs: string[] = [];
  observable: Observable<number> = of(1, 2, 3).pipe(
    concatMap(value => {
      return of(value).pipe(delay(500));
    }),
  );

  runObserverSubscribe() {
    const observer: Observer<number> = {
      next: x => this.logs.push(`[With observer object] Next value: ${x}`),
      error: err => this.logs.push(`[With observer object] Error: ${err}`),
      complete: () => this.logs.push(`[With observer object] Completed`)
    };

    this.observable.subscribe(observer);
  }

  runPositionalArgumentsSubscribe() {
    this.observable.subscribe(
      x => this.logs.push(`[With positional arguments] Next value: ${x}`),
      err => this.logs.push(`[With positional arguments] Error: ${err}`),
      () => this.logs.push(`[With positional arguments] Completed`)
    );
  }

  clearLogs() {
    this.logs = [];
  }
}
