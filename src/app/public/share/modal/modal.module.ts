import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertComponent } from './alert/alert.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { ModalService } from './modal.service';

/**
 *  模态框模块
 */
@NgModule({
  declarations: [
    AlertComponent,
    ConfirmComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  providers: [ModalService],
  entryComponents: [
    AlertComponent,
    ConfirmComponent
  ]
})
export class ModalModule {}
