import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleCreationComponent } from './role-creation.component';

describe('RoleCreationComponent', () => {
  let component: RoleCreationComponent;
  let fixture: ComponentFixture<RoleCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
