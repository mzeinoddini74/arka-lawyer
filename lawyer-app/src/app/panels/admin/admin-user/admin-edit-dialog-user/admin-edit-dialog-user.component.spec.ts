import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditDialogUserComponent } from './admin-edit-dialog-user.component';

describe('AdminEditDialogUserComponent', () => {
  let component: AdminEditDialogUserComponent;
  let fixture: ComponentFixture<AdminEditDialogUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditDialogUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditDialogUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
