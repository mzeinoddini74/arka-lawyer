import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantMenuComponent } from './consultant-menu.component';

describe('ConsultantMenuComponent', () => {
  let component: ConsultantMenuComponent;
  let fixture: ComponentFixture<ConsultantMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultantMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultantMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
