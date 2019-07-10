import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Crisis } from './crisis';
import { CRISES } from './mock-crisis';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class CrisisService {

  constructor(private messageService: MessageService) { }

  getCrisises(): Observable<Crisis[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('CrisisService: fetched heroes');
    return of(CRISES);
  }

  getCrisis(id: number | string) {
    return this.getCrisises().pipe(
      // (+) before `id` turns the string into a number
      map((crisises: Crisis[]) => crisises.find(crisis => crisis.id === +id))
    );
  }
}
