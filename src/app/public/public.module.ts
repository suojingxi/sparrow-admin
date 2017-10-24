import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AuthGuardService} from '../common/service/auth/anth.guard.service';
import {PublicRoutingModule} from './public.routing.module';
import {LoginComponent} from './login/login.component';
import {FooterComponent} from './footer/footer.component';
import {MiddleComponent} from './middle/middle.component';
@NgModule({
  declarations: [
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    MiddleComponent
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
