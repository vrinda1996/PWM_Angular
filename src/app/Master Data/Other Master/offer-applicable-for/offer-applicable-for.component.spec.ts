import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferApplicableForComponent } from './offer-applicable-for.component';

describe('OfferApplicableForComponent', () => {
  let component: OfferApplicableForComponent;
  let fixture: ComponentFixture<OfferApplicableForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferApplicableForComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferApplicableForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
