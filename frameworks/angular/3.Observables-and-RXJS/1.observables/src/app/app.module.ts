import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SubscribingComponent } from './subscribing/subscribing.component';
import { CreatingComponent } from './creating/creating.component';
import { MulticastingComponent } from './multicasting/multicasting.component';

@NgModule({
  declarations: [
    AppComponent,
    SubscribingComponent,
    CreatingComponent,
    MulticastingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'subscribing', pathMatch: 'full' },
      { path: 'subscribing', component: SubscribingComponent },
      { path: 'creating', component: CreatingComponent },
      { path: 'multicasting', component: MulticastingComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
