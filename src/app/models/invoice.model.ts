import {Order} from './order.model';

export class Invoice {
  public invoiceNumber: number;
  public order: Order;
  public dateinvoice: string;
  public paymentextras: string;
  public pricebtw: number;
  public pricepp: number;
  public othercosts: number;
  public othercostsbtw: number;
  public tobepaid: number;
  public paid: number;
  public datepartpaid: string;
  public datefullpaid: string;
  public bankaccount: string;
  public dateinvoicemailsent: string;
  public excludefrominvoicealert: boolean;

  constructor(invoiceNumber: number, order: Order, dateInvoice: any, paymentExtras: string, pricePp: number, priceBtw: number,
              otherCosts: number, otherCostsBtw: number, toBePaid: number, paid: number, datePartPaid: any, dateFullPaid: any,
              bankAccount: string, dateInvoiceMailSent: any, excludeFromInvoiceAlert: boolean) {

    this.invoiceNumber = invoiceNumber;
    this.order = order;
    this.dateinvoice = dateInvoice;
    this.paymentextras = paymentExtras;
    this.pricepp = pricePp;
    this.pricebtw = priceBtw;
    this.othercosts = otherCosts;
    this.othercostsbtw = otherCostsBtw;
    this.tobepaid = toBePaid;
    this.paid = paid;
    this.datepartpaid = datePartPaid;
    this.datefullpaid = dateFullPaid;
    this.bankaccount = bankAccount;
    this.dateinvoicemailsent = dateInvoiceMailSent;
    this.excludefrominvoicealert = excludeFromInvoiceAlert;
  }
}
