import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventmanagerEventsComponent } from './eventmanager-events.component';

describe('EventmanagerEventsComponent', () => {
  let component: EventmanagerEventsComponent;
  let fixture: ComponentFixture<EventmanagerEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventmanagerEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventmanagerEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
