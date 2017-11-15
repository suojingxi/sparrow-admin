import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ToastService} from "../share/toast-box/toast/toast.service";
import {ToastConfig, ToastType} from "../share/toast-box/toast/toast.model";
import {ServeConfig} from "../../common/config/serve.config";
import {BusinessConfig} from "../../common/config/business.config";
import {HttpService} from "../../common/service/http/http.service";

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router, private toastService: ToastService, private httpService: HttpService, private formBuilder: FormBuilder) {
    let userName = new FormControl('sysadmin', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15)]));
    let password = new FormControl('sysadmin', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15)]));
    this.loginForm = this.formBuilder.group({
      userName: userName,
      password: password
    });
  }

  ngOnInit() {
  }

  /**
   * 登录
   */
  login(){
    if(this.loginForm.valid){
      let that = this;
      this.httpService.post(ServeConfig.domain + BusinessConfig.login, {
       userName: 'admin',
       password: '123456'
       }, function (successful, data, res) {
       console.info(successful);
       console.info(data);
       console.info(res);
       if (successful) {
       const toastCfg = new ToastConfig(ToastType.SUCCESS, '', '百变小咖，登录成功!', 3000);
       that.toastService.toast(toastCfg);
       that.router.navigate(['/app/home']);
       }
       }, function (successful, msg, err) {
       const toastCfg = new ToastConfig(ToastType.ERROR, '', msg, 3000);
       that.toastService.toast(toastCfg);
       });
      const toastConfig = new ToastConfig(ToastType.SUCCESS, '', '欢迎光临，登录成功', 2000, true);
      this.toastService.toast(toastConfig);
      this.router.navigate(['/app/home']);
    }
  }

}
