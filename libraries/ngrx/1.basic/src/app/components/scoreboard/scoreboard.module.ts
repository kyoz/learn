import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { scoreboardReducer } from './scoreboard.reducer';
import { ScoreboardComponent } from './scoreboard.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('scoreboard', scoreboardReducer)
  ],
  declarations: [
    ScoreboardComponent
  ],
  exports: [
    ScoreboardComponent
  ]
})
export class ScoreboardModule {	}
