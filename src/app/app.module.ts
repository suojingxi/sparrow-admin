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
import { FrameComponent } from './public/frame/frame.component';
import { SidebarMenuComponent } from './public/frame/sidebar-menu/sidebar-menu.component';
import { TreeviewMenuComponent } from './public/frame/treeview-menu/treeview-menu.component';
import { HomeComponent } from './business/home/home.component';
import { ToastComponent } from './public/share/toast-box/toast/toast.component';
import { ToastBoxComponent } from './public/share/toast-box/toast-box.component';
import {ToastService} from "./public/share/toast-box/toast/toast.service";

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
    SelectivePreloadingStrategy
  ],
  exports: [
    ToastBoxComponent,
    SpinComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
