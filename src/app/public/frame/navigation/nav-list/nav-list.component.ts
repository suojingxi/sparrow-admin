import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-nav-list',
  templateUrl: 'nav-list.component.html',
  styleUrls: ['nav-list.component.css']
})
export class NavListComponent implements OnInit {

  @Input() listTitle: string;
  @Input() subTitles: SubTitles[];
  classFlag = false;
  constructor() { }

  ngOnInit() {
  }

  openList(): void{
    this.classFlag = !this.classFlag;
  }

}

export class SubTitles {
  title: string;
  constructor(title: string){
    this.title = title;
  }
}
