import { Component } from '@angular/core';

@Component({
  selector: 'app-vote',
  template: `
    Parent vote >
    <app-vote-taker #voteTaker (vote)="onVote($event)"></app-vote-taker>
    <div>Status: {{ voteTaker.voteState ? 'Voted' : 'Not voted yet' }}</div>
  `
})
export class VoteComponent {
  onVote(event) {
    alert(event ? 'Voted' : 'Un-voted');
  }
}

