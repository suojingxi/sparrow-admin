import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SystemComponent } from './system.component';
import { SystemRoutingModule } from './system.routing.module';

@NgModule({
  declarations: [
    SystemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SystemRoutingModule
  ],
  providers: []
})
export class SystemModule {}
