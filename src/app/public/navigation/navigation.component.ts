import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.css']
})
export class NavigationComponent implements OnInit {

  systemOrgFlag = false;
  userRoleFlag = false;
  resPemisFlag = false;
  pemisDistrFlag = false;
  constructor() { }

  ngOnInit() {
  }
  openSystemOrgList(): void{
    this.systemOrgFlag = !this.systemOrgFlag;
  }
  openUserRoleList(): void{
    this.userRoleFlag = !this.userRoleFlag;
  }
  openResPemisList(): void{
    this.resPemisFlag = !this.resPemisFlag;
  }
  openPemisDistrList(): void{
    this.pemisDistrFlag = !this.pemisDistrFlag;
  }
}
