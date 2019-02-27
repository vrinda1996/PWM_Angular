import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTypeCreationComponent } from './user-type-creation.component';

describe('UserTypeCreationComponent', () => {
  let component: UserTypeCreationComponent;
  let fixture: ComponentFixture<UserTypeCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTypeCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTypeCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
