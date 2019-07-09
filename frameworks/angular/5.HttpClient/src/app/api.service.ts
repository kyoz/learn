import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ApiService {
  isLoading = false;

  constructor(private http: HttpClient) { }

  getJSON() {
    this.isLoading = true;
    this.http.get('../assets/data.json').subscribe(res => {
      console.log(res);
      this.isLoading = false;
    });
  }

  getJSONAsString() {
    this.isLoading = true;
    this.http.get('../assets/data.json', { responseType: 'text' }).subscribe(res => {
      console.log(res);
      this.isLoading = false;
    });
  }

  getFromDataAPI() {
    this.isLoading = true;
    this.http.get('http://5d0b3fc389166d00146e35e5.mockapi.io/posts').subscribe(res => {
      console.log(res);
      this.isLoading = false;
    });
  }

  getWithError() {
    this.isLoading = true;
    this.http.get('http://ahihi.dongoc.com').pipe(
      catchError(this.handleError)
    ).subscribe(
        next => {},
        error => { this.isLoading = false; },
        () => { this.isLoading = false; });
  }

  getWithRetry() {
    const RETRY_TIMES = 3;

    this.isLoading = true;
    this.http.get('http://ahihi.dongoc.com').pipe(
      retry(RETRY_TIMES),          // retry a failed request up to 3 times
      catchError(this.handleError) // Then handle the error
    ).subscribe(
        next => {},
        error => {
          this.isLoading = false;
          console.error(`Retried ${RETRY_TIMES} times and still failed !`);
        },
        () => { this.isLoading = false; });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred: ', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`
      );
    }

    // return an observable with a user-facing error message
    return throwError('Something bad happened; Please try again later.');
  }
}

