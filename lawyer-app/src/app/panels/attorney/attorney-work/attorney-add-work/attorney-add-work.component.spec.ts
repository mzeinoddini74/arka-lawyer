import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttorneyAddWorkComponent } from './attorney-add-work.component';

describe('AttorneyAddWorkComponent', () => {
  let component: AttorneyAddWorkComponent;
  let fixture: ComponentFixture<AttorneyAddWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttorneyAddWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttorneyAddWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
