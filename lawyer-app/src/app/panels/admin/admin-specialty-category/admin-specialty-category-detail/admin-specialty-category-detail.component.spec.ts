import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSpecialtyCategoryDetailComponent } from './admin-specialty-category-detail.component';

describe('AdminSpecialtyCategoryDetailComponent', () => {
  let component: AdminSpecialtyCategoryDetailComponent;
  let fixture: ComponentFixture<AdminSpecialtyCategoryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSpecialtyCategoryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSpecialtyCategoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
