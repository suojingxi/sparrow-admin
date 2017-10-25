import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AuthGuardService} from '../common/service/auth/anth.guard.service';
import {PublicRoutingModule} from './public.routing.module';
import {LoginComponent} from './login/login.component';
import {FooterComponent} from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FrameComponent } from './frame/frame.component';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  declarations: [
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    DashboardComponent,
    FrameComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PublicRoutingModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    AuthGuardService
  ]
})
export class PublicModule {}
