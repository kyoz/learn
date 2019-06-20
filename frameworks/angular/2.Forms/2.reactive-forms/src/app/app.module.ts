import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form.component';
import { GroupedFormComponent } from './grouped-form.component';
import { NestedFormComponent } from './nested-form.component';
import { FormBuilderComponent } from './form-builder.component';
import { FormArrayComponent } from './form-array.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    GroupedFormComponent,
    NestedFormComponent,
    FormBuilderComponent,
    FormArrayComponent
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
