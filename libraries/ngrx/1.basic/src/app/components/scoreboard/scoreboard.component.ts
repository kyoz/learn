import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Scoreboard } from './scoreboard';
import { Observable } from 'rxjs';
import * as ScoreboardActions from './scoreboard.actions';

@Component({
  selector: 'scoreboard',
  template: `
    <div>Data: {{ scoreboard$ | async | json }}</div>
    <button (click)="addHomeScore()">Add home score</button>
    <button (click)="addAwayScore()">Add away score</button>
    <button (click)="resetScore()">Reset score</button>
    <button (click)="setScore()">Set score</button>
  `
})
export class ScoreboardComponent {
  scoreboard$: Observable<Scoreboard>;

  constructor(private store: Store<Scoreboard>) {
    this.scoreboard$ = store.pipe(select('scoreboard'));
  }

  addHomeScore() {
    this.store.dispatch(ScoreboardActions.homeScore());
  }

  addAwayScore() {
    this.store.dispatch(ScoreboardActions.awayScore());
  }

  resetScore() {
    this.store.dispatch(ScoreboardActions.resetScore());
  }

  setScore() {
    this.store.dispatch(ScoreboardActions.setScore({
      home: 5,
      away: 10
    }));
  }
}

