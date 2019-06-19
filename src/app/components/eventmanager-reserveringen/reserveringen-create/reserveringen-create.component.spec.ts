import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveringenCreateComponent } from './reserveringen-create.component';

describe('ReserveringenCreateComponent', () => {
  let component: ReserveringenCreateComponent;
  let fixture: ComponentFixture<ReserveringenCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserveringenCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveringenCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
