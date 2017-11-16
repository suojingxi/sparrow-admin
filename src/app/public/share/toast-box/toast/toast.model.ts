/**
 * toast类型
 */
export enum ToastType {
  SUCCESS, INFO, WARNING, ERROR
}


/**
 * toast配置
 */
export class ToastConfig {
  toastType: ToastType; // toast类型
  text: string; // toast显示内容
  textStrong: string; // 字体样式
  autoDismissTime: number; // 自动消失时间：如果大于0，则自动消失
  dismissable: boolean; // 是否自动消失


  constructor(toastType: ToastType, textStrong: string = '', text: string = '', autoDismissTime = 0, dismissable = true) {
    this.toastType = toastType;
    this.text = text;
    this.textStrong = textStrong;
    this.autoDismissTime = autoDismissTime;
    this.dismissable = dismissable;
  }

  getToastType(): ToastType {
    return this.toastType;
  }

  getText(): string {
    return this.text;
  }

  getTextStrong(): string {
    return this.textStrong;
  }

  getAutoDismissTime(): number {
    return this.autoDismissTime;
  }

  getDismissable(): boolean {
    return this.dismissable;
  }


  isDismissable() {
    return this.autoDismissTime === 0 || this.dismissable;
  }

  isAutoDismissing() {
    return this.autoDismissTime > 0;
  }
}
