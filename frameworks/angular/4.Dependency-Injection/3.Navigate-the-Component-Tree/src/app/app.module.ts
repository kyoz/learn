import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {
  FindAParentOfKnownTypeComponent,
  FindAParentOfKnownTypeChildComponent
} from './components/find-a-parent-of-known-type';
import {
  BaseComponent,
  UnableToFindParentByBaseClassComponent,
  UnableToFindParentByBaseClassChildComponent
} from './components/unable-to-find-parent-by-base-class';
import {
  FindAParentByClassInterfaceComponent,
  FindAParentByClassInterfaceChildComponent
} from './components/find-a-parent-by-class-interface';
import {
  FindAParentWithSkipselfComponent,
  FindAParentWithSkipselfChildComponent,
  FindAParentWithSkipselfSmallestChildComponent
} from './components/find-a-parent-with-skipself';

@NgModule({
  declarations: [
    AppComponent,

    FindAParentOfKnownTypeComponent, FindAParentOfKnownTypeChildComponent,
    BaseComponent, UnableToFindParentByBaseClassComponent, UnableToFindParentByBaseClassChildComponent,
    FindAParentByClassInterfaceComponent, FindAParentByClassInterfaceChildComponent,
    FindAParentWithSkipselfComponent, FindAParentWithSkipselfChildComponent, FindAParentWithSkipselfSmallestChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
