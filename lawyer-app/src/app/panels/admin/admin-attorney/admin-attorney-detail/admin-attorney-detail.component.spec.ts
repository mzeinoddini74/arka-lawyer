import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAttorneyDetailComponent } from './admin-attorney-detail.component';

describe('AdminAttorneyDetailComponent', () => {
  let component: AdminAttorneyDetailComponent;
  let fixture: ComponentFixture<AdminAttorneyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAttorneyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAttorneyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
