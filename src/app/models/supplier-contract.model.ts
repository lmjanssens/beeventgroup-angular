
import {Supplier} from './supplier.model';
import {Catering} from './catering.model';

export class SupplierContract {
  public id: number;
  public supplier: Supplier;
  public catering: Catering;
  public typeContract: boolean;
  public title: string;
  public description: string;
  public incluBtw: number;
  public excluBtw: number;
  public percentage: number;
  public preconditions: string;
  public insurance: string;
  public responsibility: string;
  public extras: string;

  constructor(id: number, supplier: Supplier, catering: Catering, typeContract: boolean, title: string,
              description: string, incluBtw: number, exclBtw: number,  percentage: number, preconditions: string,
              insurance: string, responsibility: string, extras: string) {
    this.id = id;
    this.supplier = supplier;
    this.catering = catering;
    this.typeContract = typeContract;
    this.title = title;
    this.description = description;
    this.incluBtw = incluBtw;
    this.excluBtw = exclBtw;
    this.percentage = percentage;
    this.preconditions = preconditions;
    this.insurance = insurance;
    this.responsibility = responsibility;
    this.extras = extras;
  }
}
