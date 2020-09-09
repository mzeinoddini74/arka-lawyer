import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditBlogComponent } from './admin-edit-blog.component';

describe('AdminEditBlogComponent', () => {
  let component: AdminEditBlogComponent;
  let fixture: ComponentFixture<AdminEditBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
