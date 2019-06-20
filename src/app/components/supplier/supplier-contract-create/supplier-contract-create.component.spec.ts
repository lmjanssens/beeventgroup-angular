import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierContractCreateComponent } from './supplier-contract-create.component';

describe('SupplierContractCreateComponent', () => {
  let component: SupplierContractCreateComponent;
  let fixture: ComponentFixture<SupplierContractCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierContractCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierContractCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
