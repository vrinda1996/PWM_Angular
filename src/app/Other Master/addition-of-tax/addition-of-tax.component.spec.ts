import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionOfTaxComponent } from './addition-of-tax.component';

describe('AdditionOfTaxComponent', () => {
  let component: AdditionOfTaxComponent;
  let fixture: ComponentFixture<AdditionOfTaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionOfTaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionOfTaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
