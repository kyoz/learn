import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SimplePipe } from './simple.pipe';
import { SimpleListPipe } from './simple-list.pipe';
import { SimpleImpurePipe } from './simple-impure.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SimplePipe,
    SimpleListPipe,
    SimpleImpurePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
