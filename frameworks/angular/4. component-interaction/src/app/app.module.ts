import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimerComponent } from './timer.component';
import { ChildTimerComponent } from './child-timer.component';
import { TimerViewChildComponent } from './timer-viewchild.component';
import { MissionControlComponent } from './mission-control.component';
import { AstronautComponent } from './astronaut.component';
import { VoteComponent } from './vote.component';
import { VoteTakerComponent } from './vote-taker.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    ChildTimerComponent,
    TimerViewChildComponent,
    MissionControlComponent,
    AstronautComponent,
    VoteComponent,
    VoteTakerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
