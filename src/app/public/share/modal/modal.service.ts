import { Injectable } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ConfirmComponent} from "./confirm/confirm.component";
import {ConfirmConfig, AlertConfig} from "./modal.model";
import {AlertComponent} from "./alert/alert.component";
/**
 * 模态框服务
 */
@Injectable()
export class ModalService {

  constructor(private modalService: NgbModal) {}

  //确认框
  confirm(config: ConfirmConfig): Promise<any> {
    const modalRef = this.modalService.open(ConfirmComponent);
    modalRef.componentInstance.config = config;
    return modalRef.result;
  }

  //警告框
  alert(config:AlertConfig): Promise<any> {
    const modalRef = this.modalService.open(AlertComponent);
    modalRef.componentInstance.config = config;
    return modalRef.result;
  }
}
