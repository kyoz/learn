import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { StaticsticsComponent } from './statistics.component';

const routes: Routes = [
  { path: 'statistics', component: StaticsticsComponent },
  { path: '', redirectTo: 'statistics', pathMatch: 'full' }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    StaticsticsComponent
  ]
})
export class ArrayModule {}
