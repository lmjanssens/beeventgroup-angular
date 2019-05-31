import {Supplier} from './supplier.model';

export class SupplierEmail {
  public id: number;
  public supplier: Supplier;
  public email: string;


  constructor(id: number, supplier: Supplier, email: string) {
    this.id = id;
    this.supplier = supplier;
    this.email = email;
  }
}
