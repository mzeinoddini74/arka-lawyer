import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditDialogSpecialtyCategoryComponent } from './admin-edit-dialog-specialty-category.component';

describe('AdminEditDialogSpecialtyCategoryComponent', () => {
  let component: AdminEditDialogSpecialtyCategoryComponent;
  let fixture: ComponentFixture<AdminEditDialogSpecialtyCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditDialogSpecialtyCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditDialogSpecialtyCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
