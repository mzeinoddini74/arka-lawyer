import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReplyDialogOnlineRequestComponent } from './admin-reply-dialog-online-request.component';

describe('AdminReplyDialogCommentComponent', () => {
  let component: AdminReplyDialogOnlineRequestComponent;
  let fixture: ComponentFixture<AdminReplyDialogOnlineRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminReplyDialogOnlineRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminReplyDialogOnlineRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
