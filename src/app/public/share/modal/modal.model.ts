/**
 * 确认框配置
 */
export class ConfirmConfig {
  content: string;
  declineBtnCls: string;
  declineBtnText: string;
  approveBtnCls: string;
  approveBtnText: string;

  constructor(content: string='', declineBtnCls: string='btn-light', declineBtnText: string='取消', approveBtnCls: string='btn-primary', approveBtnText: string='确定'){
    this.content = content;
    this.declineBtnCls = declineBtnCls;
    this.declineBtnText = declineBtnText;
    this.approveBtnCls = approveBtnCls;
    this.approveBtnText = approveBtnText;
  }

  getContent(): string {
    return this.content;
  }

  getdeclineBtnCls():string{
    return this.declineBtnCls;
  }

  getDeclineBtnText():string{
    return this.declineBtnText;
  }

  getApproveBtnCls():string{
    return this.approveBtnCls;
  }

  getApproveBtnText():string{
    return this.approveBtnText;
  }
}

/**
 * 警告框类型
 */
export enum AlertType {
  INFO, WARNING, ERROR
}

/**
 * 警告框配置
 */
export class AlertConfig{
  title: string;
  content: string;
  type: AlertType;
  approveBtnCls: string;
  approveBtnText: string;

  constructor(type: AlertType=AlertType.WARNING, title: string='', content: string='', approveBtnCls: string='btn-primary', approveBtnText: string='确定'){
    this.title = title;
    this.content = content;
    this.type = type;
    this.approveBtnCls = approveBtnCls;
    this.approveBtnText = approveBtnText;
  }

  getTitle(): string {
    return this.title;
  }

  getContent(): string {
    return this.content;
  }

  getType(): AlertType {
    return this.type;
  }

  getApproveBtnCls():string{
    return this.approveBtnCls;
  }

  getApproveBtnText():string{
    return this.approveBtnText;
  }
}
