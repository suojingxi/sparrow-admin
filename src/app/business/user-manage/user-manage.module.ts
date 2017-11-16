import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserManageRoutingModule } from './user-manage-routing.module';
import { PaginationModule } from '../../public/share/pagination/pagination.module';
import { UserManageComponent } from './user-manage.component';
import { UserListComponent } from './user-list/user-list.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserManageRoutingModule,
    PaginationModule
  ],
  declarations: [
    UserManageComponent,
    UserListComponent
  ],
  exports: [],
  providers: []
})
export class UserManageModule {}
