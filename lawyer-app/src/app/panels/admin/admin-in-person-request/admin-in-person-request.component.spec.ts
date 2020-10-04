import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInPersonRequestComponent } from './admin-in-person-request.component';

describe('AdminInPersonRequestComponent', () => {
  let component: AdminInPersonRequestComponent;
  let fixture: ComponentFixture<AdminInPersonRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminInPersonRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInPersonRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
