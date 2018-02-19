import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShadowComponent } from './shadow/shadow.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ShadowComponent }
];
@NgModule({
  imports: [
    CommonModule,
     RouterModule.forChild(routes)
  ],
  declarations: [ShadowComponent]
})
export class ShadowModule { }
