import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';

// Reducers
import { counterReducer } from './components/counter/counter.reducer';
import { loginReducer } from './components/login/login.reducer';

// Modules
import { ScoreboardModule } from './components/scoreboard/scoreboard.module';

// Component
import { AppComponent } from './app.component';
import { CounterComponent } from './components/counter/counter.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      counter: counterReducer,
      login: loginReducer
    }),
    ScoreboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
