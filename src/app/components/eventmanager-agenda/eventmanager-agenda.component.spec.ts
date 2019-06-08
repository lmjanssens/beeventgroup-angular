import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventmanagerAgendaComponent } from './eventmanager-agenda.component';

describe('EventmanagerAgendaComponent', () => {
  let component: EventmanagerAgendaComponent;
  let fixture: ComponentFixture<EventmanagerAgendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventmanagerAgendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventmanagerAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
