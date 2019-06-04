import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventmanagerEventmanagersComponent } from './eventmanager-eventmanagers.component';

describe('EventmanagerEventmanagersComponent', () => {
  let component: EventmanagerEventmanagersComponent;
  let fixture: ComponentFixture<EventmanagerEventmanagersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventmanagerEventmanagersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventmanagerEventmanagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
