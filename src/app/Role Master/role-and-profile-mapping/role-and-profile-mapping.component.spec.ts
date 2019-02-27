import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleAndProfileMappingComponent } from './role-and-profile-mapping.component';

describe('RoleAndProfileMappingComponent', () => {
  let component: RoleAndProfileMappingComponent;
  let fixture: ComponentFixture<RoleAndProfileMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleAndProfileMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleAndProfileMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
