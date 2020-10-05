import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddConsultantComponent } from './admin-add-consultant.component';

describe('AdminAddConsultantComponent', () => {
  let component: AdminAddConsultantComponent;
  let fixture: ComponentFixture<AdminAddConsultantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddConsultantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
