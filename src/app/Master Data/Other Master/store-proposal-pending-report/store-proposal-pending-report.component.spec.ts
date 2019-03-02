import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreProposalPendingReportComponent } from './store-proposal-pending-report.component';

describe('StoreProposalPendingReportComponent', () => {
  let component: StoreProposalPendingReportComponent;
  let fixture: ComponentFixture<StoreProposalPendingReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreProposalPendingReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreProposalPendingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
