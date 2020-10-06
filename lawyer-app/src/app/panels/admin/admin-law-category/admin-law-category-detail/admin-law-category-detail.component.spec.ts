import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLawCategoryDetailComponent } from './admin-law-category-detail.component';

describe('AdminLawCategoryDetailComponent', () => {
  let component: AdminLawCategoryDetailComponent;
  let fixture: ComponentFixture<AdminLawCategoryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLawCategoryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLawCategoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
