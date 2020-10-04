import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelSelectCategoryComponent } from './tel-select-category.component';

describe('TelSelectCategoryComponent', () => {
  let component: TelSelectCategoryComponent;
  let fixture: ComponentFixture<TelSelectCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelSelectCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelSelectCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
