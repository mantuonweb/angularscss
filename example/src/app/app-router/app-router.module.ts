import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule'},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
       appRoutes,{ 
        enableTracing: true
       
      }
    )
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRouterModule { }
