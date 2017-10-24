import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from '../common/service/auth/anth.guard.service';
import {HeaderComponent} from '../public/header/header.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuardService],
    component: HeaderComponent
  },
  {
    path: 'business',
    canActivate: [AuthGuardService],
    component: HeaderComponent
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
