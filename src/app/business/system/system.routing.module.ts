import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../../common/service/auth/anth.guard.service';
import { SystemComponent } from './system.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuardService],
    component: SystemComponent
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
export class SystemRoutingModule {}
