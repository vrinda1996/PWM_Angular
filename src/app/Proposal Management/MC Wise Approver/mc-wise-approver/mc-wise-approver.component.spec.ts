import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McWiseApproverComponent } from './mc-wise-approver.component';

describe('McWiseApproverComponent', () => {
  let component: McWiseApproverComponent;
  let fixture: ComponentFixture<McWiseApproverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McWiseApproverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McWiseApproverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
