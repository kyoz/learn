import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form.component';
import { GroupedFormComponent } from './grouped-form.component';
import { NestedFormComponent } from './nested-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    GroupedFormComponent,
    NestedFormComponent
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
