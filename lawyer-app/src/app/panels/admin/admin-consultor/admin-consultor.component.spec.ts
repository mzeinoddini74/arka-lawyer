import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConsultorComponent } from './admin-consultor.component';

describe('AdminConsultorComponent', () => {
  let component: AdminConsultorComponent;
  let fixture: ComponentFixture<AdminConsultorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminConsultorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminConsultorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
