import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOnlineRequestComponent } from './admin-online-request.component';

describe('AdminOnlineRequestComponent', () => {
  let component: AdminOnlineRequestComponent;
  let fixture: ComponentFixture<AdminOnlineRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOnlineRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOnlineRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
