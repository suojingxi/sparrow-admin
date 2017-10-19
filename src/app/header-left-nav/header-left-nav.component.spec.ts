import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLeftNavComponent } from './header-left-nav.component';

describe('HeaderLeftNavComponent', () => {
  let component: HeaderLeftNavComponent;
  let fixture: ComponentFixture<HeaderLeftNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderLeftNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLeftNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
