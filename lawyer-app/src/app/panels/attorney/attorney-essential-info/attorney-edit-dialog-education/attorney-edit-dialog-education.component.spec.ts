import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttorneyEditDialogEducationComponent } from './attorney-edit-dialog-education.component';

describe('AttorneyEditDialogEducationComponent', () => {
  let component: AttorneyEditDialogEducationComponent;
  let fixture: ComponentFixture<AttorneyEditDialogEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttorneyEditDialogEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttorneyEditDialogEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
