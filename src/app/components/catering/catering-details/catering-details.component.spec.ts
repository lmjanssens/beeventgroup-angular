import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CateringDetailsComponent } from './catering-details.component';

describe('CateringDetailsComponent', () => {
  let component: CateringDetailsComponent;
  let fixture: ComponentFixture<CateringDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CateringDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CateringDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
