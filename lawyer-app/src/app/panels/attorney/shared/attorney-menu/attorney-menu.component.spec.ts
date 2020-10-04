import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttorneyMenuComponent } from './attorney-menu.component';

describe('AttorneyMenuComponent', () => {
  let component: AttorneyMenuComponent;
  let fixture: ComponentFixture<AttorneyMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttorneyMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttorneyMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
