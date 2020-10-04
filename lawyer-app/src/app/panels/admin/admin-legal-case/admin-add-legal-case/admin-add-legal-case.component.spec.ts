import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddLegalCaseComponent } from './admin-add-legal-case.component';

describe('AdminAddLegalCaseComponent', () => {
  let component: AdminAddLegalCaseComponent;
  let fixture: ComponentFixture<AdminAddLegalCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddLegalCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddLegalCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
