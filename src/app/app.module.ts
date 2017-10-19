import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MiddleComponent } from './middle/middle.component';
import { HeaderLeftNavComponent } from './header-left-nav/header-left-nav.component';
import { HeaderMiddleTitleComponent } from './header-middle-title/header-middle-title.component';
import { HeaderRightNavComponent } from './header-right-nav/header-right-nav.component';
import { MiddleLeftNavComponent } from './middle-left-nav/middle-left-nav.component';
import { MiddleRightContentComponent } from './middle-right-content/middle-right-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MiddleComponent,
    HeaderLeftNavComponent,
    HeaderMiddleTitleComponent,
    HeaderRightNavComponent,
    MiddleLeftNavComponent,
    MiddleRightContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
