import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appReducers } from './core/store';

// Effects
import { CounterEffects } from './core/store/counter';

// Components
import { AppComponent } from './app.component';
import { LoggerComponent, CounterComponent } from './components';


@NgModule({
  declarations: [
    AppComponent,
    LoggerComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(appReducers, {
      runtimeChecks: {
        strictActionImmutability: true,
        strictActionSerializability: true,
        strictStateImmutability: true,
        strictStateSerializability: true
      }
    }),
    EffectsModule.forRoot([
      CounterEffects
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
