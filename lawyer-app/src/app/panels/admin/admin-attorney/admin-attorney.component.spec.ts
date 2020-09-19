import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAttorneyComponent } from './admin-attorney.component';

describe('AdminAttorneyComponent', () => {
  let component: AdminAttorneyComponent;
  let fixture: ComponentFixture<AdminAttorneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAttorneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAttorneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
