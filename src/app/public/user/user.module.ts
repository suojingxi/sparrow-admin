import {NgModule} from "@angular/core";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EditPasswordComponent} from "./edit-password/edit-password.component";

/**
 * 用户公共模块
 */
@NgModule({
  imports: [
    NgbModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    EditPasswordComponent
  ],
  entryComponents: [
    EditPasswordComponent
  ],
  exports: [],
  providers: []
})
export class UserModule {}
