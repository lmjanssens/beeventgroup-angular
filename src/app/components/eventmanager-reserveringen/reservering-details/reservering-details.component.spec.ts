import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveringDetailsComponent } from './reservering-details.component';

describe('ReserveringDetailsComponent', () => {
  let component: ReserveringDetailsComponent;
  let fixture: ComponentFixture<ReserveringDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserveringDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveringDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
