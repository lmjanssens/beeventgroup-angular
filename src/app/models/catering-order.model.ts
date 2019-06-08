import {Order} from './order.model';
import {Catering} from './catering.model';


export class CateringOrder {
  public id: number;
  public order: Order;
  public catering: Catering;
  public dateCateringOptions: any;
  public dateCateringDefinite: any;
  public contactCateringOption: string;
  public contactCateringDefinite: string;
  public contactCateringSend: string;
  public note: string;


  constructor(id: number, order: Order, catering: Catering, dateCateringOptions: any, dateCateringDefinite: any, contactCateringOption: string, contactCateringDefinite: string, contactCateringSend: string, note: string) {
    this.id = id;
    this.order = order;
    this.catering = catering;
    this.dateCateringOptions = dateCateringOptions;
    this.dateCateringDefinite = dateCateringDefinite;
    this.contactCateringOption = contactCateringOption;
    this.contactCateringDefinite = contactCateringDefinite;
    this.contactCateringSend = contactCateringSend;
    this.note = note;
  }
}
