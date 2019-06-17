import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CateringCreateComponent } from './catering-create.component';

describe('CateringCreateComponent', () => {
  let component: CateringCreateComponent;
  let fixture: ComponentFixture<CateringCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CateringCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CateringCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
