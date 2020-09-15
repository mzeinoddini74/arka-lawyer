import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReplyDialogCommentComponent } from './admin-reply-dialog-comment.component';

describe('AdminReplyDialogCommentComponent', () => {
  let component: AdminReplyDialogCommentComponent;
  let fixture: ComponentFixture<AdminReplyDialogCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminReplyDialogCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminReplyDialogCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
