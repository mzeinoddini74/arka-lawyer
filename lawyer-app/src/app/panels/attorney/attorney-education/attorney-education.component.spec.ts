import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttorneyEducationComponent } from './attorney-education.component';

describe('AttorneyEducationComponent', () => {
  let component: AttorneyEducationComponent;
  let fixture: ComponentFixture<AttorneyEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttorneyEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttorneyEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
