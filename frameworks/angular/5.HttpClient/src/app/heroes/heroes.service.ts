import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Hero } from './heroes.component';

const ENDPOINT = 'https://5d245a82e39785001406ed7e.mockapi.io/heroes';
const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    // Authorization: 'Basic',
    'Content-Type': 'application/json',
  })
};

@Injectable({ providedIn: 'root' })
export class HeroService {
  heroes: Hero[] = [];
  isLoading = false;

  constructor(private http: HttpClient) {
    this.refresh();
  }

  refresh() {
    this.isLoading = true;
    this.getHeroes().subscribe(heroes => {
      this.heroes = heroes;
    }, error => {
      this.isLoading = false;
    }, () => {
      this.isLoading = false;
    });
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(ENDPOINT, HTTP_OPTIONS).pipe(
      catchError(this.handleError)
    );
  }

  searchHeroes(term: string): Observable<Hero[]> {
    term = term.trim();

    // Add save, URL encoded search parameter if there is a search term
    const options = term ? {
      params: new HttpParams().set('name', term) 
    } : {};

    return this.http.get<Hero[]>(ENDPOINT, options).pipe(
      catchError(this.handleError)
    );
  }

  addHero(hero: Hero): Observable<Hero> {
    this.isLoading = true;

    return this.http.post<Hero>(ENDPOINT, hero, HTTP_OPTIONS).pipe(
      catchError(this.handleError)
    );
  }

  updateHero(hero: Hero): Observable<Hero> {
    this.isLoading = true;

    return this.http.put<Hero>(`${ENDPOINT}/${hero.id}`, hero, HTTP_OPTIONS).pipe(
      catchError(this.handleError)
    );
  }

  deleteHero(id: number) {
    this.isLoading = true;

    const url = `${ENDPOINT}/${id}`;
    return this.http.delete(url, HTTP_OPTIONS).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`
      );
    }

    return throwError('Something bad happened; Please try again later.');
  }
}
