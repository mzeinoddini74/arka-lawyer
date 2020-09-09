import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditAttorneyComponent } from './admin-edit-attorney.component';

describe('AdminEditAttorneyComponent', () => {
  let component: AdminEditAttorneyComponent;
  let fixture: ComponentFixture<AdminEditAttorneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditAttorneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditAttorneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
