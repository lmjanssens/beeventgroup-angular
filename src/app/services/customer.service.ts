import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Customer} from '../models/customer.model';
import {AbstractService} from './abstract.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends AbstractService<Customer> {
  constructor(http: HttpClient) {
    super(http, 'customers/');
  }
}
