import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelSelectConsultorComponent } from './tel-select-consultor.component';

describe('TelSelectConsultorComponent', () => {
  let component: TelSelectConsultorComponent;
  let fixture: ComponentFixture<TelSelectConsultorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelSelectConsultorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelSelectConsultorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
