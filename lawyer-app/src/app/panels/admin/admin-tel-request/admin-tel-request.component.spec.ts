import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTelRequestComponent } from './admin-tel-request.component';

describe('AdminTelRequestComponent', () => {
  let component: AdminTelRequestComponent;
  let fixture: ComponentFixture<AdminTelRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTelRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTelRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
