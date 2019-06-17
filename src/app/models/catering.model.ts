import {Supplier} from './supplier.model';
import {SupplierContract} from './supplier-contract.model';

export class Catering {
  public id: number;
  public supplier: Supplier;
  public supplierContracts: SupplierContract[];
  public cateringName: string;
  public contactPerson: string;
  public zipcode: string;
  public address: string;
  public city: string;
  public phone: string;
  public cateringPrice: number;
  public note: string;
}
