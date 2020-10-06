import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LawSubCategoryComponent } from './law-sub-category.component';

describe('LawSubCategoryComponent', () => {
  let component: LawSubCategoryComponent;
  let fixture: ComponentFixture<LawSubCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LawSubCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LawSubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
