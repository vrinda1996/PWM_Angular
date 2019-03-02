import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewModifyComponent } from './view-modify.component';

describe('ViewModifyComponent', () => {
  let component: ViewModifyComponent;
  let fixture: ComponentFixture<ViewModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
