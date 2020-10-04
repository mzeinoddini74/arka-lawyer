import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultorDashboardComponent } from './consultor-dashboard.component';

describe('ConsultorDashboardComponent', () => {
  let component: ConsultorDashboardComponent;
  let fixture: ComponentFixture<ConsultorDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultorDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
