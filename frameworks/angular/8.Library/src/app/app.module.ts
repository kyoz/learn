import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LibraryOneModule } from 'library-one';
import { LibraryTwoModule } from 'library-two';
import { CoreModule } from '@test/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LibraryOneModule,
    LibraryTwoModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
