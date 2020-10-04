import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttorneyEditDialogWorkComponent } from './attorney-edit-dialog-work.component';

describe('AttorneyEditDialogWorkComponent', () => {
  let component: AttorneyEditDialogWorkComponent;
  let fixture: ComponentFixture<AttorneyEditDialogWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttorneyEditDialogWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttorneyEditDialogWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
