import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierContractUpdateComponent } from './supplier-contract-update.component';

describe('SupplierContractUpdateComponent', () => {
  let component: SupplierContractUpdateComponent;
  let fixture: ComponentFixture<SupplierContractUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierContractUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierContractUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
