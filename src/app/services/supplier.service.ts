import {Injectable} from '@angular/core';
import {AbstractService} from './abstract.service';
import {HttpClient} from '@angular/common/http';
import {Supplier} from '../models/supplier.model';

@Injectable({
  providedIn: 'root'
})
export class SupplierService extends AbstractService<Supplier> {
  constructor(http: HttpClient) {
    super(http, 'suppliers/');
  }
}
