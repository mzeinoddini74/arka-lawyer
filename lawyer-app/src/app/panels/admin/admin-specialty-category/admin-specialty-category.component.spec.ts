import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSpecialtyCategoryComponent } from './admin-specialty-category.component';

describe('AdminSpecialtyCategoryComponent', () => {
  let component: AdminSpecialtyCategoryComponent;
  let fixture: ComponentFixture<AdminSpecialtyCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSpecialtyCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSpecialtyCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
