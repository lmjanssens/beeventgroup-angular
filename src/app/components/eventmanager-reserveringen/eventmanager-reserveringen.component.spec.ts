import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventmanagerReserveringenComponent } from './eventmanager-reserveringen.component';

describe('EventmanagerReserveringenComponent', () => {
  let component: EventmanagerReserveringenComponent;
  let fixture: ComponentFixture<EventmanagerReserveringenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventmanagerReserveringenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventmanagerReserveringenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
