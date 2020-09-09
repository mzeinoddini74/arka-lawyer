import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditBannerComponent } from './admin-edit-banner.component';

describe('AdminEditBannerComponent', () => {
  let component: AdminEditBannerComponent;
  let fixture: ComponentFixture<AdminEditBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
