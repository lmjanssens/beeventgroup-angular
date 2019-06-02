import {Order} from './order.model';

export class Invoice {
  public invoiceNumber: number;
  public order: Order;
  public dateInvoice: any;
  public paymentExtras: string;
  public priceBtw: number;
  public pricePp: number;
  public otherCosts: number;
  public otherCostsBtw: number;
  public toBePaid: number;
  public paid: number;
  public datePartPaid: any;
  public dateFullPaid: any;
  public bankAccount: string;
  public dateInvoiceMailSent: any;
  public excludeFromInvoiceAlert: boolean;

  constructor(invoiceNumber: number, order: Order, dateInvoice: any, paymentExtras: string, pricePp: number, priceBtw: number,
              otherCosts: number, otherCostsBtw: number, toBePaid: number, paid: number, datePartPaid: any, dateFullPaid: any,
              bankAccount: string, dateInvoiceMailSent: any, excludeFromInvoiceAlert: boolean) {

    this.invoiceNumber = invoiceNumber;
    this.order = order;
    this.dateInvoice = dateInvoice;
    this.paymentExtras = paymentExtras;
    this.pricePp = pricePp;
    this.priceBtw = priceBtw;
    this.otherCosts = otherCosts;
    this.otherCostsBtw = otherCostsBtw;
    this.toBePaid = toBePaid;
    this.paid = paid;
    this.datePartPaid = datePartPaid;
    this.dateFullPaid = dateFullPaid;
    this.bankAccount = bankAccount;
    this.dateInvoiceMailSent = dateInvoiceMailSent;
    this.excludeFromInvoiceAlert = excludeFromInvoiceAlert;
  }
}
