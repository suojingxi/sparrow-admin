import {Directive, AfterViewInit, OnDestroy, Input, Output, EventEmitter, ElementRef} from '@angular/core';
declare var $: any;

/**
 * 自定义滚动条
 */
@Directive({
  selector: '[app-custom-scrollbar]'
})
export class CustomScrollbarDirective implements AfterViewInit, OnDestroy{

  @Input() options: any = {
    axis: 'y',
    theme: 'minimal-dark',
    autoDraggerLength:true,
    scrollInertia:500
  };

  @Output() onViewInit = new EventEmitter();

  private scrollbarInstance: any;

  constructor(private elementRef: ElementRef) {}

  /**
   * 视图初始化
   */
  ngAfterViewInit(): void {
    this.createScrollbar();
  }

  /**
   * 销毁
   */
  ngOnDestroy(): void {
    this.scrollbarInstance.mCustomScrollbar("destroy");
  }

  /**
   * 创建树
   */
  createScrollbar() {
    this.scrollbarInstance = $(this.elementRef.nativeElement).mCustomScrollbar(this.options);
    this.onViewInit.emit(this.scrollbarInstance);
  }

  /**
   * 获得实例
   */
  getScrollbarInstance(){
    return this.scrollbarInstance;
  }
}
