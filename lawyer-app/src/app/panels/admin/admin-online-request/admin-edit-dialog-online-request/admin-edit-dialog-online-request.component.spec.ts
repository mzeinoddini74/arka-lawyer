import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditDialogOnlineRequestComponent } from './admin-edit-dialog-online-request.component';

describe('AdminEditDialogCommentComponent', () => {
  let component: AdminEditDialogOnlineRequestComponent;
  let fixture: ComponentFixture<AdminEditDialogOnlineRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditDialogOnlineRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditDialogOnlineRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
