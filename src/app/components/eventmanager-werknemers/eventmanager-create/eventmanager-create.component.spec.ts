import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventmanagerCreateComponent } from './eventmanager-create.component';

describe('EventmanagerCreateComponent', () => {
  let component: EventmanagerCreateComponent;
  let fixture: ComponentFixture<EventmanagerCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventmanagerCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventmanagerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
