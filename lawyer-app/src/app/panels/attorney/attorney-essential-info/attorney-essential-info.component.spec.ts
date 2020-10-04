import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttorneyEssentialInfoComponent } from './attorney-essential-info.component';

describe('AttorneyEssentialInfoComponent', () => {
  let component: AttorneyEssentialInfoComponent;
  let fixture: ComponentFixture<AttorneyEssentialInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttorneyEssentialInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttorneyEssentialInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
