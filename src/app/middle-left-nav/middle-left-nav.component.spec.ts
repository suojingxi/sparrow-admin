import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleLeftNavComponent } from './middle-left-nav.component';

describe('MiddleLeftNavComponent', () => {
  let component: MiddleLeftNavComponent;
  let fixture: ComponentFixture<MiddleLeftNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddleLeftNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleLeftNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
