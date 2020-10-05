import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditDialogConsultantComponent } from './admin-edit-dialog-consultant.component';

describe('AdminEditDialogConsultantComponent', () => {
  let component: AdminEditDialogConsultantComponent;
  let fixture: ComponentFixture<AdminEditDialogConsultantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditDialogConsultantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditDialogConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
