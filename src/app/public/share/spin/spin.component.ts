import { Component } from '@angular/core';
import { SpinService } from './spin.service';

/*
 旋转组件：页面加载时用到
 */
@Component({
  selector: 'app-spin',
  templateUrl: 'spin.component.html',
  styleUrls: ['spin.component.scss']
})
export class SpinComponent {
  // 显示标识：是否显示该组件
  showSpin = false;

  // 数量：用于控制组件显示，防止重复加载
  count = 0;

  constructor(private spinService: SpinService) {
    this.spinService.getSpin().forEach((showSpin: boolean) => {
      if (showSpin) {
        this.openSpin();
      }else {
        this.closeSpin();
      }
    });
  }

  /**
   * 打开旋转显示
   */
  private openSpin() {
    if (!this.showSpin) {
      this.showSpin = true;
    }
    this.count++;
  }

  /**
   * 关闭旋转显示
   */
  private closeSpin() {
    this.count--;
    if (this.count <= 0) {
      this.showSpin = false;
      this.count = 0;
    }
  }
}
