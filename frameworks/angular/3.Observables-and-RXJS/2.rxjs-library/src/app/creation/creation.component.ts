import { Component } from '@angular/core';
import { from, fromEvent, interval } from 'rxjs';
import { take } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.scss']
})
export class CreationComponent {
  logs: string[] = [];

  createObservableFromPromise() {
    const data = from(this.getExamplePromise());
    const that = this;

    data.subscribe({
      next(response) { that.logs.push(response); },
      error(err) { that.logs.push(err) },
      complete() { that.logs.push('Completed') }
    });
  }

  createObservableFromACounter() {
    const secondsCounter = interval(1000).pipe(take(3));
    const that = this;

    secondsCounter.subscribe({
      next(response) { that.logs.push(response.toString()) },
      error(err) { that.logs.push(err) },
      complete() { that.logs.push('Completed') }
    });
  }

  createObservableFromAnEvent() {
    const element = document.getElementById('test-area');
    const mouseMoves = fromEvent(element, 'mousemove');
    const that = this;
    let logsCount = 0;

    const subscription = mouseMoves.subscribe((event: MouseEvent) => {
      that.logs.push(`Coords: (${event.clientX} x ${event.clientY})`);

      if (logsCount > 10) {
        subscription.unsubscribe();
      }

      logsCount++;
    });
  }

  createObservableThatCreateAjaxRequest() {
    // Get mock data from mockapi.io
    const apiData = ajax('https://5d0b3fc389166d00146e35e5.mockapi.io/posts');
    const that = this;

    apiData.subscribe(res => {
      let data = res && res.response;

      data = data.map((d: any) => {
        return {
          id: d.id,
          name: d.name,
          createAt: d.createAt,
          postMessage: d.postMessage
        }
      });

      for (const item of data) {
        that.logs.push(JSON.stringify(item));
      }
    });
  }

  getExamplePromise(): Promise<string> {
    return new Promise(resolve => resolve('Hello world'));
  }

}
