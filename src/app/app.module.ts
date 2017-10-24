import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AppRoutingModule} from './app.routing.module';

import { AppComponent } from './app.component';
import {BusinessModule} from './business/business.module';
import {PublicModule} from './public/public.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    PublicModule,
    BusinessModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
