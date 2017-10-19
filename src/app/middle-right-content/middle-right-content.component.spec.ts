import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleRightContentComponent } from './middle-right-content.component';

describe('MiddleRightContentComponent', () => {
  let component: MiddleRightContentComponent;
  let fixture: ComponentFixture<MiddleRightContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddleRightContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleRightContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
