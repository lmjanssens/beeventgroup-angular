import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventmanagerUpdateComponent } from './eventmanager-update.component';

describe('EventmanagerUpdateComponent', () => {
  let component: EventmanagerUpdateComponent;
  let fixture: ComponentFixture<EventmanagerUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventmanagerUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventmanagerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
