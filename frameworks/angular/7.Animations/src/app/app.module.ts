import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicAnimationComponent } from './basic-animation.component';
import { EnterLeaveAnimationComponent } from './enter-leave-animation.component';
import { KeyframesAnimationComponent } from './keyframes-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicAnimationComponent,
    EnterLeaveAnimationComponent,
    KeyframesAnimationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
