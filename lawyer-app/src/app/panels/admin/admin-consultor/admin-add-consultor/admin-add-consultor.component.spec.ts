import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddConsultorComponent } from './admin-add-consultor.component';

describe('AdminAddConsultorComponent', () => {
  let component: AdminAddConsultorComponent;
  let fixture: ComponentFixture<AdminAddConsultorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddConsultorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddConsultorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
