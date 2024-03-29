import {SupplierEmail} from './supplier-email.model';
import {SupplierAddress} from './supplier-address.model';
import {SupplierPhone} from './supplier-phone.model';
import {SupplierContract} from './supplier-contract.model';

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

  constructor(supplierId: number, name: string, contact_person: string, supervisor: string, website: string,
              note: string, image: string) {
    this.supplierid = supplierId;
    this.name = name;
    this.contact_person = contact_person;
    this.supervisor = supervisor;
    this.website = website;
    this.note = note;
    this.image = image;
  }
}
