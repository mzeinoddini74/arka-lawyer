import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttorneyLegalCaseComponent } from './attorney-legal-case.component';

describe('AttorneyLegalCaseComponent', () => {
  let component: AttorneyLegalCaseComponent;
  let fixture: ComponentFixture<AttorneyLegalCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttorneyLegalCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttorneyLegalCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
