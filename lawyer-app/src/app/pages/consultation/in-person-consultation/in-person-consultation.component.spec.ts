import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InPersonConsultationComponent } from './in-person-consultation.component';

describe('InPersonConsultationComponent', () => {
  let component: InPersonConsultationComponent;
  let fixture: ComponentFixture<InPersonConsultationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InPersonConsultationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InPersonConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
