import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAssignRequestDialogComponent } from './admin-assign-request-dialog.component';

describe('AdminAssignRequestDialogComponent', () => {
  let component: AdminAssignRequestDialogComponent;
  let fixture: ComponentFixture<AdminAssignRequestDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAssignRequestDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAssignRequestDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
