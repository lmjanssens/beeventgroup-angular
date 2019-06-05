import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CateringOverviewComponent } from './catering-overview.component';

describe('CateringOverviewComponent', () => {
  let component: CateringOverviewComponent;
  let fixture: ComponentFixture<CateringOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CateringOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CateringOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
