import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelConsultationComponent } from './tel-consultation.component';

describe('TelConsultationComponent', () => {
  let component: TelConsultationComponent;
  let fixture: ComponentFixture<TelConsultationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelConsultationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
