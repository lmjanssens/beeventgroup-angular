import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CateringUpdateComponent } from './catering-update.component';

describe('CateringUpdateComponent', () => {
  let component: CateringUpdateComponent;
  let fixture: ComponentFixture<CateringUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CateringUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CateringUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
