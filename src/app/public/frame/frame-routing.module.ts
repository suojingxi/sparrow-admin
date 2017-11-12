import {Routes, RouterModule} from "@angular/router";
import {FrameComponent} from "./frame.component";
import {NgModule} from "@angular/core";
/**
 * 主体路由
 */
const routes: Routes = [
  {
    path: '',
    component: FrameComponent,
    children: [
      {path: 'home', loadChildren: 'app/business/home/home.module#HomeModule'},
      {path: 'user', loadChildren: 'app/business/user-manage/user-manage.module#UserManageModule'}
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
export class FrameRoutingModule{}
