import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadTimeConfigurationComponent } from './lead-time-configuration.component';

describe('LeadTimeConfigurationComponent', () => {
  let component: LeadTimeConfigurationComponent;
  let fixture: ComponentFixture<LeadTimeConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadTimeConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadTimeConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
