import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddAttorneyComponent } from './admin-add-attorney.component';

describe('AdminAddAttorneyComponent', () => {
  let component: AdminAddAttorneyComponent;
  let fixture: ComponentFixture<AdminAddAttorneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddAttorneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddAttorneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
