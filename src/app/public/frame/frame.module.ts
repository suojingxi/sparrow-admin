import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FrameRoutingModule} from "./frame-routing.module";
import {FrameComponent} from "./frame.component";
import {SidebarMenuComponent} from "./sidebar-menu/sidebar-menu.component";
import {TreeviewMenuComponent} from "./treeview-menu/treeview-menu.component";
import {ModalModule} from "../share/modal/modal.module";
/**
 * 主体模块
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    FrameRoutingModule,
    ModalModule
  ],
  declarations: [
    FrameComponent,
    SidebarMenuComponent,
    TreeviewMenuComponent
  ],
  exports: [],
  providers: []
})
export class FrameModule{}
