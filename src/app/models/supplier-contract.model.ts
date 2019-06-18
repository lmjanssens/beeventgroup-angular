
import {Supplier} from './supplier.model';
import {Catering} from './catering.model';

export class SupplierContract {
  public id: number;
  public supplier: Supplier;
  public type: string;
  public title: string;
  public description: string;
  public inclubtw: number;
  public exclubtw: number;
  public btw_percentage: number;
  public pre_conditions: string;
  public insurance: string;
  public responsibility: string;
  public extras: string;
  public startDate: Date;
  public endDate: Date;
}
