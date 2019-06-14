import {Order} from './order.model';

export class Quotation {
  public quotationNumber: number;
  public order: Order;
  public datequotation: any;
  public bankaccount: string;
  public pricebtw: number;
  public pricepp: number;

  constructor(quotationNumber: number, order: Order, dateQuotation: any, bankAccount: string, priceBtw: number, pricePp: number) {
    this.quotationNumber = quotationNumber;
    this.order = order;
    this.datequotation = dateQuotation;
    this.bankaccount = bankAccount;
    this.pricebtw = priceBtw;
    this.pricepp = pricePp;

  }
}
