import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { ReactiveComponent } from './reactive/reactive.component';

// Directives
import { ForbiddenValidatorDirective } from './shared/forbidden-name.directive';
import { MatchPasswordValidatorDirective } from './shared/match-password-template.directive';
import { CheckUsernameValidatorDirective } from './shared/check-username.directive';

@NgModule({
  declarations: [
    // Components
    AppComponent,
    TemplateComponent,
    ReactiveComponent,

    // Directives
    ForbiddenValidatorDirective,
    MatchPasswordValidatorDirective,
    CheckUsernameValidatorDirective
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
