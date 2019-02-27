import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LSMWMasterComponent } from './lsmwmaster.component';

describe('LSMWMasterComponent', () => {
  let component: LSMWMasterComponent;
  let fixture: ComponentFixture<LSMWMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LSMWMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LSMWMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
