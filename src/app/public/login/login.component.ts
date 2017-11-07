import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {
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
    console.info(this.loginForm);
    if(this.loginForm.valid){
      let that = this;
      this.router.navigate(['/app/home']);
    }
  }

}
