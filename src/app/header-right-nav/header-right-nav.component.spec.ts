import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderRightNavComponent } from './header-right-nav.component';

describe('HeaderRightNavComponent', () => {
  let component: HeaderRightNavComponent;
  let fixture: ComponentFixture<HeaderRightNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderRightNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderRightNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
