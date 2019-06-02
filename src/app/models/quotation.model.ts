import {Order} from './order.model';

export class Quotation {
  public quotationNumber: number;
  public order: Order;
  public dateQuotation: any;
  public bankAccount: string;
  public priceBtw: number;
  public pricePp: number;

  constructor(quotationNumber: number, order: Order, dateQuotation: any, bankAccount: string, priceBtw: number, pricePp: number) {
    this.quotationNumber = quotationNumber;
    this.order = order;
    this.dateQuotation = dateQuotation;
    this.bankAccount = bankAccount;
    this.priceBtw = priceBtw;
    this.pricePp = pricePp;

  }
}
