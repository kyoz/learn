import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NestedServiceDependenciesComponent } from './components/nested-service-dependencies';
import { LimitServiceScopeToAComponentSubtreeComponent } from './components/limit-service-scope-to-a-component-subtree';
import { MultipleServiceInstances, HeroComponent } from './components/multiple-service-instances';
import { OptionalAndLimitSearch, CarComponent, TireComponent } from './components/optional-and-limit-search';

@NgModule({
  declarations: [
    AppComponent,
    NestedServiceDependenciesComponent,
    LimitServiceScopeToAComponentSubtreeComponent,
    MultipleServiceInstances, HeroComponent,
    OptionalAndLimitSearch, CarComponent, TireComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
