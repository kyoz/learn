import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

import { TodoState } from './core/store/todo/todo.state';
import { LoggerState } from './core/store/logger/logger.state';

import { AppComponent } from './app.component';
import { TodoComponent } from './core/components/todo/todo.component';
import { LoggerComponent } from './core/components/logger/logger.component';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    LoggerComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([
      TodoState,
      LoggerState
    ]),
    NgxsLoggerPluginModule.forRoot({
      disabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
