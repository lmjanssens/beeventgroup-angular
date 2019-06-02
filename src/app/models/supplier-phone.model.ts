import {Supplier} from './supplier.model';

export class SupplierPhone {
  public id: number;
  public supplier: Supplier;
  public phone: string;


  constructor(id: number, supplier: Supplier, phone: string) {
    this.id = id;
    this.supplier = supplier;
    this.phone = phone;
  }
}
