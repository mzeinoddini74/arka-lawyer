import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttorneyDetailComponent } from './attorney-detail.component';

describe('AttorneyDetailComponent', () => {
  let component: AttorneyDetailComponent;
  let fixture: ComponentFixture<AttorneyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttorneyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttorneyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
