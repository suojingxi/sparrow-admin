import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {SelectivePreloadingStrategy} from "./SelectivePreloadingStrategy";
/**
 * app路由
 */
const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: 'app/public/login/login.module#LoginModule'
  },
  {
    path: 'app',
    loadChildren: 'app/public/frame/frame.module#FrameModule'
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];
@NgModule({
  imports: [
    /**
     * 使用hash风格的路由
     * angular2默认采用HTML5的pushState来管理路由，它会导致前端路由与后端路由的冲突，
     * 例如当部署到nginx环境时，我们通过首页进入子路由一切正常，但是在子路由路径下，刷新就会报404了。
     * 默认情况下nginx会当成这个路径是实际web路径下的资源而去定位它，但可想而知实际是并不存在的。
     * 折中的方案可以改回hash风格：
     */
    RouterModule.forRoot(routes, {preloadingStrategy: SelectivePreloadingStrategy, useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule{}
