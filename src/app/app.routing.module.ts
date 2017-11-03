import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  /*
   path：字符串，路径 不要在路径前加/
   component：组件
   pathMatch：为字符串默认为前缀匹配 "prefix"; "full" 为完全匹配。
   redirectTo：指向为路径，既path
   outlet：字符串，路由目标，面对多个路由的情况
   children：Routes 子路由相关
   */
  {
    path: '',
    loadChildren: 'app/public/frame/frame.module#FrameModule'
  },
  {
    path: '**',
    loadChildren: 'app/public/frame/frame.module#FrameModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
