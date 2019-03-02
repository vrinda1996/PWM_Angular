import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasonOfRejectionComponent } from './reason-of-rejection.component';

describe('ReasonOfRejectionComponent', () => {
  let component: ReasonOfRejectionComponent;
  let fixture: ComponentFixture<ReasonOfRejectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReasonOfRejectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReasonOfRejectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
