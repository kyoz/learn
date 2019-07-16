import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../core/store';
import { infoMessage } from '../../core/store/logger';

@Injectable({ providedIn: 'root'} )
export class LoggerService {
  infoMessage$: Observable<string[]>;

  constructor(private store: Store<AppState>) {
    this.infoMessage$ = this.store.pipe(select(infoMessage));
  }
}
