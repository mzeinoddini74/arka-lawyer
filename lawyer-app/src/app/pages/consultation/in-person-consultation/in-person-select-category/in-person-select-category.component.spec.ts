import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InPersonSelectCategoryComponent } from './in-person-select-category.component';

describe('InPersonSelectCategoryComponent', () => {
  let component: InPersonSelectCategoryComponent;
  let fixture: ComponentFixture<InPersonSelectCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InPersonSelectCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InPersonSelectCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
