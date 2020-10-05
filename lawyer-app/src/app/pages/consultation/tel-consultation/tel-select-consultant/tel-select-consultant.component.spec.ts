import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelSelectConsultantComponent } from './tel-select-consultant.component';

describe('TelSelectConsultantComponent', () => {
  let component: TelSelectConsultantComponent;
  let fixture: ComponentFixture<TelSelectConsultantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelSelectConsultantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelSelectConsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
