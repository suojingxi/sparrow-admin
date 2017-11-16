import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from '../../share/toast-box/toast/toast.service';
import { CustomValidators } from '../../../common/rule/custom-validator/custom-validator.rule';
import { ToastConfig, ToastType } from '../../share/toast-box/toast/toast.model';

/**
 * 修改密码组件
 */
@Component({
  selector: 'app-edit-password',
  templateUrl: 'edit-password.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['edit-password.component.scss']
})
export class EditPasswordComponent {

  passwordEditForm: FormGroup;

  constructor(public activeModal: NgbActiveModal, private toastService: ToastService, private formBuilder: FormBuilder) {
    const oldPasswordFc = new FormControl('', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15)]));
    const newPasswordFc = new FormControl('', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15)]));
    const certainPasswordFc = new FormControl('', CustomValidators.equalTo(newPasswordFc));
    this.passwordEditForm = this.formBuilder.group({
      oldPassword: oldPasswordFc,
      newPassword: newPasswordFc,
      certainPassword: certainPasswordFc
    });
  }

  /**
   * 提交
   */
  submit(): void {
    if (this.passwordEditForm.valid) {
      console.info(this.passwordEditForm.value);
      const toastCfg = new ToastConfig(ToastType.SUCCESS, '', '修改密码成功!', 2000);
      this.toastService.toast(toastCfg);
      this.close();
    }
  }

  /**
   * 关闭
   */
  close(): void {
    this.activeModal.dismiss({ status: 'closed' });
  }
}
