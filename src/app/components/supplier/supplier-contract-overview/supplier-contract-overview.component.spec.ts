import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierContractOverviewComponent } from './supplier-contract-overview.component';

describe('SupplierContractOverviewComponent', () => {
  let component: SupplierContractOverviewComponent;
  let fixture: ComponentFixture<SupplierContractOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierContractOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierContractOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
