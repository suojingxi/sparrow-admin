import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrameComponent } from './frame.component';

const routes: Routes = [
  {
    path: '',
    component: FrameComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: 'app/business/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'system',
        loadChildren: 'app/business/system/system.module#SystemModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class FrameRoutingModule {}
