import {Component, OnInit, Input} from '@angular/core';
import {trigger, state, style, transition, animate} from "@angular/animations";
import {ToastConfig} from "./toast/toast.model";
import {ToastService} from "./toast/toast.service";

@Component({
  selector: 'app-toast-box',
  templateUrl: 'toast-box.component.html',
  styleUrls: ['toast-box.component.scss'],
  animations: [
    trigger('animation', [
      state('none', style({})),
      state('decent', style([{opacity: 1}, {maxHeight: 300}])),
      state('fancy', style([{transform: 'translateX(0)'},{transform: 'translateY(0)'}, {opacity: 1}, {maxHeight: 300}])),
      transition('void => fancy', [
        style({opacity: 0, maxHeight: 0, transform: 'translateY(-100%)'}),
        animate('300ms ease-in-out')
      ]),
      transition('fancy => void', [
        animate('300ms ease-in-out', style({transform: 'translateX(100%)', height: 0, opacity: 0}))
      ]),
      transition('void => decent', [
        style({opacity: 0, maxHeight: 0}),
        animate('300ms ease-in-out')
      ]),
      transition('decent => void', [
        animate('300ms ease-in-out', style({height: 0, opacity: 0}))
      ])
    ])
  ]
})
export class ToastBoxComponent implements OnInit {

  @Input() toastAnimation: string = 'none';
  @Input() toastPosition: string = 'toast-top-center';

  private toastConfigs: Array<ToastConfig> = [];

  constructor(private toastService: ToastService) {
    this.toastService.getToasts().forEach((config: ToastConfig) => {
      this.toastConfigs.unshift(config);
    });
  }

  ngOnInit() {
  }

  /**
   * 获得所有toast配置
   */
  getToastConfigs(): Array<ToastConfig>  {
    return this.toastConfigs;
  }

  /**
   * 移除
   * @param toastCfg
   */
  remove(toastCfg: ToastConfig) {
    if(this.toastConfigs.indexOf(toastCfg) >= 0) {
      this.toastConfigs.splice(this.toastConfigs.indexOf(toastCfg), 1);
    }
  }
}
