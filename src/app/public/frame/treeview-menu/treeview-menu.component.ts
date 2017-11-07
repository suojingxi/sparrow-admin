import {Component, OnInit, Input} from '@angular/core';
import {MenuData} from "../frame.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-treeview-menu',
  templateUrl: 'treeview-menu.component.html',
  styleUrls: ['treeview-menu.component.scss']
})
export class TreeviewMenuComponent {

  @Input() data: MenuData;

  constructor(private router: Router) {}

  /**
   * 是否有子节点
   * @param item
   * @returns {boolean}
   */
  hasLeaf(item: MenuData): boolean {
    return !item.children || !item.children.length;
  }

  /**
   * 点击
   * @param item
   */
  itemClicked(item: MenuData) {
    if (!this.hasLeaf(item)) {
      item.isExpend = !item.isExpend;
    } else {
      this.router.navigate([item.url]);
    }
  }

}
