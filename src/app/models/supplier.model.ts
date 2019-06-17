import {SupplierEmail} from './supplier-email.model';
import {SupplierContract} from './supplier-contract.model';
import {SupplierPhone} from './supplier-phone.model';
import {SupplierAddress} from './supplier-address.model';

export class Supplier {
  public supplierid: number;
  public name: string;
  public contact_person: string;
  public supervisor: string;
  public website: string;
  public note: string;
  public image: string;
  public email_addresses: SupplierEmail[];
  public phone_numbers: SupplierPhone[];
  public contracts: SupplierContract[];
  public addresses: SupplierAddress[];
}
