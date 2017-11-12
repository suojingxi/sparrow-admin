import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpinComponent } from './public/share/spin/spin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppService } from './app.service';
import { SpinService } from './public/share/spin/spin.service';
import { SelectivePreloadingStrategy } from './SelectivePreloadingStrategy';
import { ToastComponent } from './public/share/toast-box/toast/toast.component';
import { ToastBoxComponent } from './public/share/toast-box/toast-box.component';
import {ToastService} from "./public/share/toast-box/toast/toast.service";
import {HttpService} from "./common/service/http/http.service";

@NgModule({
  declarations: [
    AppComponent,
    SpinComponent,
    ToastComponent,
    ToastBoxComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [
    AppService,
    ToastService,
    SpinService,
    SelectivePreloadingStrategy,
    HttpService
  ],
  exports: [
    ToastBoxComponent,
    SpinComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
