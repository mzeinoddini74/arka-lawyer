import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLegalCaseComponent } from './admin-legal-case.component';

describe('AdminLegalCaseComponent', () => {
  let component: AdminLegalCaseComponent;
  let fixture: ComponentFixture<AdminLegalCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLegalCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLegalCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
