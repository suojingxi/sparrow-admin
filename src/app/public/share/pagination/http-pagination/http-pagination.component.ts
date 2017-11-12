import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {HttpService} from "../../../../common/service/http/http.service";
import {ToastService} from "../../toast-box/toast/toast.service";
import {ArrayUtil} from "../../../../common/util/array.util";
import {ObjectUtil} from "../../../../common/util/object.util";
import {HttpPaginationMethod, PaginationType} from "../pagination.model";
import {StringUtil} from "../../../../common/util/string.util";
import {ToastType, ToastConfig} from "../../toast-box/toast/toast.model";
/**
 * app-http-pagination组件
 */
@Component({
  selector: 'app-http-pagination',
  templateUrl: 'http-pagination.component.html',
  styleUrls: ['http-pagination.component.scss']
})
export class HttpPaginationComponent implements OnInit {

  @Input() pageList: Array<number> = [10, 20, 30, 50, 100, 150, 200];

  @Input() btnCls: string = 'btn-light';

  @Input() url: string;

  @Input() method: string = 'post';

  @Input() param: any = new Object();


  @Output() onDataChanged = new EventEmitter();



  total: number = 0;
  pageSize: number = this.pageList[0];
  pageNumber: number = 1;

  constructor(private httpService: HttpService, private toastService: ToastService) {}

  /**
   * 初始化
   */
  ngOnInit() {
    this.getServerData();
  }

  /**
   * 查询方法
   */
  search(){
    this.getServerData();
  }

  /**
   * 获得服务器数据
   */
  private getServerData() {
    let that = this;
    let serviceData: any = {};
    if(ArrayUtil.isArray(this.param)){
      serviceData.pageNumber = this.pageNumber;
      serviceData.pageSize = this.pageSize;
      serviceData.list = this.param;
    }else if(ObjectUtil.isObject(this.param)){
      this.param.pageNumber = this.pageNumber;
      this.param.pageSize = this.pageSize;
      serviceData = this.param;
    }else{
      serviceData.pageNumber = this.pageNumber;
      serviceData.pageSize = this.pageSize;
    }
    if(this.method == HttpPaginationMethod.GET && StringUtil.isNotEmpty(this.url)){
      this.httpService.get(this.url, serviceData, function (successful, data, res) {
        if(successful){
          that.serverDataProcess(data);
        }else {
          const toastCfg = new ToastConfig(ToastType.ERROR, '', '数据请求失败！', 3000);
          that.toastService.toast(toastCfg);
        }
      }, function (successful, msg, err) {
        const toastCfg = new ToastConfig(ToastType.ERROR, '', msg, 3000);
        that.toastService.toast(toastCfg);
      });
    }else if(StringUtil.isNotEmpty(this.url)){
      this.httpService.post(this.url, serviceData, function (successful, data, res) {
        if(successful){
          that.serverDataProcess(data);
        }else {
          const toastCfg = new ToastConfig(ToastType.ERROR, '', '数据请求失败！', 3000);
          that.toastService.toast(toastCfg);
        }
      }, function (successful, msg, err) {
        const toastCfg = new ToastConfig(ToastType.ERROR, '', msg, 3000);
        that.toastService.toast(toastCfg);
      });
    }else{
      console.error("app-http-pagination组件请求时，url参数为空！")
    }
  }

  /**
   * 服务器端数据处理
   * @param data 数据
   */
  private serverDataProcess(data: any) {
    if (data && data.total && data.rows) {
      this.total = data.total;
      this.onDataChanged.emit(data.rows);
    } else {
      console.error("app-http-pagination,返回的数据格式不正确！");
    }
  }

  /**
   * 分页改变事件
   * @param event
   */
  onPageChanged($event) {
    if ($event.type != PaginationType.PAGE_INIT) {
      this.pageSize = $event.pageSize;
      this.pageNumber = $event.pageNumber;
      this.getServerData();
    }
  }
}
