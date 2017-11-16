import { Routes, RouterModule } from '@angular/router';
import { UserManageComponent } from './user-manage.component';
import { UserListComponent } from './user-list/user-list.component';
import { NgModule } from '@angular/core';
const routes: Routes = [
  {
    path: '',
    component: UserManageComponent,
    children: [
      {
        path: 'userList',
        component: UserListComponent
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
export class UserManageRoutingModule {}
