import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttorneyAddEducationComponent } from './attorney-add-education.component';

describe('AttorneyAddEducationComponent', () => {
  let component: AttorneyAddEducationComponent;
  let fixture: ComponentFixture<AttorneyAddEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttorneyAddEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttorneyAddEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
