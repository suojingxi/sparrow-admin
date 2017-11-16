import { Component, OnInit, Input } from '@angular/core';
import { MenuData } from '../frame.model';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: 'sidebar-menu.component.html',
  styleUrls: ['sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {

  // 输入数据
  @Input() data: Array<MenuData>;

  // 所有数据
  private allData: Array<MenuData>;

  // 搜索文本
  searchText = '';

  // 搜索隐藏
  searchMsgHidden = true;

  constructor() { }

  /**
   * 初始化
   */
  ngOnInit() {
    this.allData = this.data;
  }

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
      for (const obj of this.data) {
        if (obj.id !== item.id) {
          obj.isExpend = false;
        }
      }
      item.isExpend = !item.isExpend;
    }
  }

  /**
   * 查询菜单
   */
  searchMenu() {
    const tempData = this.allData;
    this.searchText = this.searchText.trim();
    this.searchMsgHidden = true;

    if ('' !== this.searchText) {
      const keyWord = new RegExp(this.searchText);
      const menuList = new Array<MenuData>();
      const menuIdList = new Array<string>();

      for (const item of tempData) {
        this.searchItem(item, menuList, menuIdList, keyWord);
      }
      if (menuList.length > 0) {
        this.data = menuList;
      } else {
        this.searchMsgHidden = false;
      }

    } else {
      this.data = this.allData;
    }
  }

  /**
   * 查询子菜单
   * @param item
   * @param menuList
   */
  searchItem(item: MenuData, menuList: Array<MenuData>, menuIdList: Array<string>, keyWord: RegExp) {
    item.isExpend = false;
    // 关键字匹配，并且不在列表中的
    if ((item.name.match(keyWord) || item.keyWord.match(keyWord)) &&
      !this.checkSearchMenuIdExists(item.id, menuIdList)) {
      menuList.push(item);
      this.pushSearchMenu(item, menuIdList);
    }

    // 存在子菜单的，递归子菜单
    const itemChildren = item.children;
    if (itemChildren && itemChildren.length > 0) {
      for (const subItem of itemChildren) {
        this.searchItem(subItem, menuList, menuIdList, keyWord);
      }
    }

  }

  /**
   * 添加查询的菜单
   * @param item
   * @param menuIdList
   */
  pushSearchMenu(item: MenuData, menuIdList: Array<string>) {
    menuIdList.push(item.id);
    const itemChildren = item.children;
    if (itemChildren && itemChildren.length > 0) {
      for (const subItem of itemChildren) {
        this.pushSearchMenu(subItem, menuIdList);
      }
    }
  }

  /**
   *
   * @param id 检查菜单id是否存在
   * @param menuIdList
   */
  checkSearchMenuIdExists(id, menuIdList: Array<string>) {
    for (const menuId of menuIdList) {
      if (menuId === id) {
        return true;
      }
    }
    return false;
  }

  /**
   * 查询输入
   * @param event
   */
  inputSearchTxt(event) {
    this.searchText = event.target.value;
  }
}
