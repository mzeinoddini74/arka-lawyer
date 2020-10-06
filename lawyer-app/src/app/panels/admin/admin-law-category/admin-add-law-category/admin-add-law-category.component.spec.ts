import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddLawCategoryComponent } from './admin-add-law-category.component';

describe('AdminAddLawCategoryComponent', () => {
  let component: AdminAddLawCategoryComponent;
  let fixture: ComponentFixture<AdminAddLawCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddLawCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddLawCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
