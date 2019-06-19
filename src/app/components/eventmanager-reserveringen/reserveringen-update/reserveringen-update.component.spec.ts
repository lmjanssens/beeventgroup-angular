import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveringenUpdateComponent } from './reserveringen-update.component';

describe('ReserveringenUpdateComponent', () => {
  let component: ReserveringenUpdateComponent;
  let fixture: ComponentFixture<ReserveringenUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserveringenUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveringenUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
