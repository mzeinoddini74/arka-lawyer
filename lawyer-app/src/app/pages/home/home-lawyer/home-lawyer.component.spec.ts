import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLawyerComponent } from './home-lawyer.component';

describe('HomeLawyerComponent', () => {
  let component: HomeLawyerComponent;
  let fixture: ComponentFixture<HomeLawyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLawyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLawyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
