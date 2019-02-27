import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMchComponent } from './user-mch.component';

describe('UserMchComponent', () => {
  let component: UserMchComponent;
  let fixture: ComponentFixture<UserMchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
