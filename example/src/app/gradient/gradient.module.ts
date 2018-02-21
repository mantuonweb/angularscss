import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { GradientComponent } from './gradient/gradient.component';
const routes: Routes = [
  { path: '', component: GradientComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GradientComponent]
})
export class GradientModule { }
