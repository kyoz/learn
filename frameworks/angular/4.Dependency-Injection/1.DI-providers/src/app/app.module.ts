import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UseClassComponent, UseClassChildComponent } from './use-class';
import { UseExistingComponent, UseExistingChildComponent } from './use-existing';
import { UseValueComponent } from './use-value';
import { UseValue2Component } from './use-value-2';

@NgModule({
  declarations: [
    AppComponent,

    UseClassComponent,
    UseClassChildComponent,

    UseExistingComponent,
    UseExistingChildComponent,

    UseValueComponent,
    UseValue2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
