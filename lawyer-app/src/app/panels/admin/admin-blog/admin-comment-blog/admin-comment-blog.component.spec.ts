import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCommentBlogComponent } from './admin-comment-blog.component';

describe('AdminCommentBlogComponent', () => {
  let component: AdminCommentBlogComponent;
  let fixture: ComponentFixture<AdminCommentBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCommentBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCommentBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
