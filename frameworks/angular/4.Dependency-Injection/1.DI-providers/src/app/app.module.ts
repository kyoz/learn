import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClassProviderWithDependencyComponent } from './class-provider-with.dependencies';

@NgModule({
  declarations: [
    AppComponent,
    ClassProviderWithDependencyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
