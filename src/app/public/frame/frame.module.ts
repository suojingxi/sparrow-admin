import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FrameComponent } from './frame.component';
import { FrameRoutingModule } from './frame.routing.module';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { AuthGuardService } from '../../common/service/auth/anth.guard.service';

@NgModule({
  declarations: [
    HeaderComponent,
    NavigationComponent,
    ContentComponent,
    LoginComponent,
    FooterComponent,
    FrameComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    FrameRoutingModule
  ],
  providers: [
    AuthGuardService
  ]
})
export class FrameModule { }
