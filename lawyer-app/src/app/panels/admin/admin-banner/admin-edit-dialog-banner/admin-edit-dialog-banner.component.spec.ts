import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditDialogBannerComponent } from './admin-edit-dialog-banner.component';

describe('AdminEditDialogBannerComponent', () => {
  let component: AdminEditDialogBannerComponent;
  let fixture: ComponentFixture<AdminEditDialogBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditDialogBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditDialogBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
