import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddSpecialtyCategoryComponent } from './admin-add-specialty-category.component';

describe('AdminAddSpecialtyCategoryComponent', () => {
  let component: AdminAddSpecialtyCategoryComponent;
  let fixture: ComponentFixture<AdminAddSpecialtyCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddSpecialtyCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddSpecialtyCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
