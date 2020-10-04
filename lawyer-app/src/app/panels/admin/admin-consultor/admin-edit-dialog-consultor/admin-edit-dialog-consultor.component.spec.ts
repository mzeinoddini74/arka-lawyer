import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditDialogConsultorComponent } from './admin-edit-dialog-consultor.component';

describe('AdminEditDialogConsultorComponent', () => {
  let component: AdminEditDialogConsultorComponent;
  let fixture: ComponentFixture<AdminEditDialogConsultorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditDialogConsultorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditDialogConsultorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
