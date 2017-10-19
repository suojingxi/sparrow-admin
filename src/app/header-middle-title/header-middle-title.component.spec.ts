import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMiddleTitleComponent } from './header-middle-title.component';

describe('HeaderMiddleTitleComponent', () => {
  let component: HeaderMiddleTitleComponent;
  let fixture: ComponentFixture<HeaderMiddleTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderMiddleTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMiddleTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
