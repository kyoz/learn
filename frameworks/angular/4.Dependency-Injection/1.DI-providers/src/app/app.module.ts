import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UseClassComponent, UseClassChildComponent } from './use-class';
import { UseExistingComponent, UseExistingChildComponent } from './use-existing';

@NgModule({
  declarations: [
    AppComponent,
    UseClassComponent,
    UseClassChildComponent,
    UseExistingComponent,
    UseExistingChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
