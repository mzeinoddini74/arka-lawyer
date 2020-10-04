import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultorMenuComponent } from './consultor-menu.component';

describe('ConsultorMenuComponent', () => {
  let component: ConsultorMenuComponent;
  let fixture: ComponentFixture<ConsultorMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultorMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultorMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
