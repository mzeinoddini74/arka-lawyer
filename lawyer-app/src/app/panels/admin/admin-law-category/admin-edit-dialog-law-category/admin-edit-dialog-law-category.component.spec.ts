import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditDialogLawCategoryComponent } from './admin-edit-dialog-law-category.component';

describe('AdminEditDialogLawCategoryComponent', () => {
  let component: AdminEditDialogLawCategoryComponent;
  let fixture: ComponentFixture<AdminEditDialogLawCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditDialogLawCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditDialogLawCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
