import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditDialogAttorneyComponent } from './admin-edit-dialog-attorney.component';

describe('AdminEditDialogAttorneyComponent', () => {
  let component: AdminEditDialogAttorneyComponent;
  let fixture: ComponentFixture<AdminEditDialogAttorneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditDialogAttorneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditDialogAttorneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
