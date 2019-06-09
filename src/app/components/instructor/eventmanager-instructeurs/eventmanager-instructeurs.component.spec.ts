import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventmanagerInstructeursComponent } from './eventmanager-instructeurs.component';

describe('EventmanagerInstructeursComponent', () => {
  let component: EventmanagerInstructeursComponent;
  let fixture: ComponentFixture<EventmanagerInstructeursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventmanagerInstructeursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventmanagerInstructeursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
