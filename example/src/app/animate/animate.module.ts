import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateComponent } from './animate/animate.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: AnimateComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AnimateComponent]
})
export class AnimateModule { }
