import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ToastService} from "../share/toast-box/toast/toast.service";
import {ToastConfig, ToastType} from "../share/toast-box/toast/toast.model";

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router, private toastService: ToastService, private formBuilder: FormBuilder) {
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
      const toastConfig = new ToastConfig(ToastType.SUCCESS, '', '欢迎光临，登录成功', 2000, true);
      this.toastService.toast(toastConfig);
      this.router.navigate(['/app/home']);
    }
  }

}
