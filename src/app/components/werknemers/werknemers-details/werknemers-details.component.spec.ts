import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WerknemersDetailsComponent } from './werknemers-details.component';

describe('WerknemersDetailsComponent', () => {
  let component: WerknemersDetailsComponent;
  let fixture: ComponentFixture<WerknemersDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WerknemersDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WerknemersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
