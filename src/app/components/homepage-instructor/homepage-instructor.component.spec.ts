import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageInstructorComponent } from './homepage-instructor.component';

describe('HomepageInstructorComponent', () => {
  let component: HomepageInstructorComponent;
  let fixture: ComponentFixture<HomepageInstructorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageInstructorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
