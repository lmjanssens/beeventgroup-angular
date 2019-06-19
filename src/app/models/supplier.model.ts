import {SupplierEmail} from './supplier-email.model';
import {SupplierAddress} from './supplier-address.model';
import {SupplierPhone} from './supplier-phone.model';
import {SupplierContract} from "./supplier-contract.model";

export class Supplier {
  public supplierid: number;
  public name: string;
  public contact_person: string;
  public supervisor: string;
  public website: string;
  public note: string;
  public image: string;
  public email_addresses: SupplierEmail[];
  public addresses: SupplierAddress[];
  public phone_numbers: SupplierPhone[];
  public contracts: SupplierContract[];
}

