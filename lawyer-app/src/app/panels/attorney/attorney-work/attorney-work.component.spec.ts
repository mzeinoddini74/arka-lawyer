import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttorneyWorkExperienceComponent } from './attorney-work.component';

describe('AttorneyWorkExperienceComponent', () => {
  let component: AttorneyWorkExperienceComponent;
  let fixture: ComponentFixture<AttorneyWorkExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttorneyWorkExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttorneyWorkExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
