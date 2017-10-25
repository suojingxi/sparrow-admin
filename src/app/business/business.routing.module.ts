import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AuthGuardService } from '../common/service/auth/anth.guard.service';
import { FrameComponent } from '../public/frame/frame.component';
import { DashboardComponent } from '../public/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'business',
    canActivate: [AuthGuardService],
    component: FrameComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: '**',
        component: DashboardComponent
      }
    ]
  },
  {
    path: '',
    canActivate: [AuthGuardService],
    component: FrameComponent
  },
  {
    path: '**',
    component: FrameComponent
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
export class BusinessRoutingModule {}
