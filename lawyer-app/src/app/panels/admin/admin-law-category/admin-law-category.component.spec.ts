import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLawCategoryComponent } from './admin-law-category.component';

describe('AdminLawCategoryComponent', () => {
  let component: AdminLawCategoryComponent;
  let fixture: ComponentFixture<AdminLawCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLawCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLawCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
