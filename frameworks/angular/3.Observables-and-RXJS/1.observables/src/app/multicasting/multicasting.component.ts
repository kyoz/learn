import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-multicasting',
  templateUrl: './multicasting.component.html',
  styleUrls: ['./multicasting.component.scss']
})
export class MulticastingComponent {
  logs: string[] = [];

  createADeplayedSequence() {
    const that = this;
    function sequenceSubscriber(observer) {
      const seq = [1, 2, 3];
      let timeoutId;

      function doSequence(arr, idx) {
        timeoutId = setTimeout(() => {
          observer.next(arr[idx]);
          if (idx === arr.length - 1) {
            observer.complete();
          } else {
            doSequence(arr, ++idx);
          }
        }, 1000);
      }

      doSequence(seq, 0);

      return {
        unsubscribe() {
          clearTimeout(timeoutId);
          that.logs.push('[Delayed Sequence] Unsubscribed');
        }
      }
    }

    const sequence = new Observable(sequenceSubscriber);

    const subscription = sequence.subscribe({
      next(num) { that.logs.push(`[Delayed Sequence] ${num}`) },
      complete() {
        that.logs.push('[Delayed Sequence] Finished sequence');
        subscription.unsubscribe();
      }
    });
  }

  createMulticastSubscriber() {
    const multicastSequence = new Observable(this.multicastSequenceSubscriber());
    const that = this;

    multicastSequence.subscribe({
      next(num) { that.logs.push('1st subscribe: ' + num); },
      complete() { that.logs.push('1st sequence finished.'); }
    });

    setTimeout(() => {
      multicastSequence.subscribe({
        next(num) { that.logs.push('2nd subscribe: ' + num); },
        complete() { that.logs.push('2nd sequence finished.'); }
      });
    }, 1500);
  }

  multicastSequenceSubscriber() {
    const seq = [1, 2, 3];
    const observers = [];
    let timeoutId;

    return (observer) => {
      observers.push(observer);

      if (observers.length === 1) {
        timeoutId = this.doSequence({
          next(val) {
            observers.forEach(obs => obs.next(val));
          },
          complete() {
            observers.slice(0).forEach(obs => obs.complete());
          }
        }, seq, 0);
      }

      return {
        unsubscribe() {
          observers.splice(observers.indexOf(observer), 1);

          if (observers.length === 0) {
            clearTimeout(timeoutId);
          }
        }
      }
    }
  }

  doSequence(observer, arr, idx) {
    return setTimeout(() => {
      observer.next(arr[idx]);
      if (idx === arr.length - 1) {
        observer.complete();
      } else {
        this.doSequence(observer, arr, ++idx);
      }
    }, 1000);
  }
}
