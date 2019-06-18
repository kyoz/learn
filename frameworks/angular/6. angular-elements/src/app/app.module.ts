import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PopupComponent } from './popup.component';
import { PopupService } from './popup.service';

@NgModule({
  imports: [ BrowserModule, BrowserAnimationsModule ],
  declarations: [ AppComponent, PopupComponent ],
  providers: [ PopupService ],
  bootstrap: [ AppComponent ],
  entryComponents: [ PopupComponent ]
})
export class AppModule { }
