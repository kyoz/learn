import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, filter, catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent {
  logs: string[] = [];
  retryTimes = 0;

  tryMapOperator() {
    const nums = of(1, 2, 3);
    const squareValues = map((val: number) => val * val);
    const squareNums = squareValues(nums);

    squareNums.subscribe(
      value => this.logs.push(value.toString()),
      error => this.logs.push(`Map error: ${error}`),
      () => this.logs.push('Map complete !')
    );
  }

  tryPipes() {
    const nums = of(1, 2, 3, 4, 5);
    const squareOddVals = nums.pipe(
      filter((num: number) => num % 2 !== 0),
      map(n => n * n)
    );

    squareOddVals.subscribe(
      value => this.logs.push(value.toString()),
      error => this.logs.push(`Pipes error: ${error}`),
      () => this.logs.push('Pipes complete !')
    );
  }

  tryErrorHandling() {
    const apiData = this.errorAPI().pipe(
      catchError(error => of(error))
    );

    apiData.subscribe(
      res => this.logs.push(res),
      error => this.logs.push(error),
      () => this.logs.push(`Get data complete ! (Although it can't get all the data but it doesn't raise any error cause error is catched)`)
    );
  }

  tryRetryFailedObservable() {
    this.retryTimes = 0;
    const apiData = this.errorAPI().pipe(
      retry(3), // Retry 3 times before failing
      catchError(error => of(error))
    );

    apiData.subscribe(
      res => this.logs.push(`Retry ${this.retryTimes} times: ${res}`),
      error => this.logs.push(`Retry ${this.retryTimes} times: ${error}`),
      () => {
        this.logs.push(`Get data complete ! (Although it can't get all the data but it doesn't raise any error cause error is catched`);
        this.retryTimes++;
      });
  }

  errorAPI() {
    return new Observable(observer => {
      observer.next(1);
      observer.next(2);
      observer.error(`Can't get data`)
      observer.next(3);
      observer.complete();
    });
  }

}
