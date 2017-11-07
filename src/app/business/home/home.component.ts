import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {

  //用户提示显示/隐藏
  userTipClose: boolean = false;

  constructor(private ngbModalService: NgbModal) {}

  ngOnInit() {
  }

  passwordEdit(){}
}
