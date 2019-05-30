
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

  constructor(id: number, supplier: Supplier, supplierContracts: SupplierContract[], cateringName: string, contactPerson: string, zipcode: string, address: string, city: string, phone: string, cateringPrice: number, note: string) {
    this.id = id;
    this.supplier = supplier;
    this.supplierContracts = supplierContracts;
    this.cateringName = cateringName;
    this.contactPerson = contactPerson;
    this.zipcode = zipcode;
    this.address = address;
    this.city = city;
    this.phone = phone;
    this.cateringPrice = cateringPrice;
    this.note = note;
  }
}
