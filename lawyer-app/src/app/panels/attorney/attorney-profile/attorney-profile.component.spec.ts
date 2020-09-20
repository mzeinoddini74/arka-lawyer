import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttorneyProfileComponent } from './attorney-profile.component';

describe('AttorneyProfileComponent', () => {
  let component: AttorneyProfileComponent;
  let fixture: ComponentFixture<AttorneyProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttorneyProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttorneyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
