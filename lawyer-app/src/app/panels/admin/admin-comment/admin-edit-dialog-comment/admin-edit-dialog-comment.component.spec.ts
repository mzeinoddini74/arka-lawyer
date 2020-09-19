import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditDialogCommentComponent } from './admin-edit-dialog-comment.component';

describe('AdminEditDialogCommentComponent', () => {
  let component: AdminEditDialogCommentComponent;
  let fixture: ComponentFixture<AdminEditDialogCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditDialogCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditDialogCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
