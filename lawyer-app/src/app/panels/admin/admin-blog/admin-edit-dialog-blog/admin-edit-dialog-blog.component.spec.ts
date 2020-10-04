import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditDialogBlogComponent } from './admin-edit-dialog-blog.component';

describe('AdminEditDialogBlogComponent', () => {
  let component: AdminEditDialogBlogComponent;
  let fixture: ComponentFixture<AdminEditDialogBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditDialogBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditDialogBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
