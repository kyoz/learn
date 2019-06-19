import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form.component';

@NgModule({
  declarations: [ AppComponent, ReactiveFormComponent, TemplateDrivenFormComponent ],
  imports: [ BrowserModule, FormsModule, ReactiveFormsModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
