import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistexMasterComponent } from './vistex-master.component';

describe('VistexMasterComponent', () => {
  let component: VistexMasterComponent;
  let fixture: ComponentFixture<VistexMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistexMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistexMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
