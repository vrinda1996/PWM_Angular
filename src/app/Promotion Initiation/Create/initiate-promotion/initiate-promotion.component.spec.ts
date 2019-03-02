import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiatePromotionComponent } from './initiate-promotion.component';

describe('InitiatePromotionComponent', () => {
  let component: InitiatePromotionComponent;
  let fixture: ComponentFixture<InitiatePromotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitiatePromotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitiatePromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
