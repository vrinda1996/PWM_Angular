import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadTimeByTimeComponent } from './lead-time-by-time.component';

describe('LeadTimeByTimeComponent', () => {
  let component: LeadTimeByTimeComponent;
  let fixture: ComponentFixture<LeadTimeByTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadTimeByTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadTimeByTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
