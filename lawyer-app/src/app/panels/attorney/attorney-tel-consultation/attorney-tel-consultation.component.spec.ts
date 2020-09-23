import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttorneyTelConsultationComponent } from './attorney-tel-consultation.component';

describe('AttorneyTelConsultationComponent', () => {
  let component: AttorneyTelConsultationComponent;
  let fixture: ComponentFixture<AttorneyTelConsultationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttorneyTelConsultationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttorneyTelConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
