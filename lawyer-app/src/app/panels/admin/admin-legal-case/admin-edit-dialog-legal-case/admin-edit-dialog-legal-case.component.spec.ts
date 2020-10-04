import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditDialogLegalCaseComponent } from './admin-edit-dialog-legal-case.component';

describe('AdminEditDialogLegalCaseComponent', () => {
  let component: AdminEditDialogLegalCaseComponent;
  let fixture: ComponentFixture<AdminEditDialogLegalCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditDialogLegalCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditDialogLegalCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
