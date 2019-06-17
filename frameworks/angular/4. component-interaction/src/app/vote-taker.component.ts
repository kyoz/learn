import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vote-taker',
  template: `
    Child Vote: <button (click)="voteIt()">Vote in child</button>
  `
})
export class VoteTakerComponent {
  @Output() vote: EventEmitter<boolean> = new EventEmitter<boolean>();

  voteState = false;

  voteIt() {
    this.voteState = !this.voteState;
    this.vote.next(this.voteState);
  }
}

