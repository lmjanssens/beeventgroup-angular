import {Injectable} from '@angular/core';
import {Observable, pipe} from 'rxjs';
import {Customer} from '../models/customer.model';
import {first, retry, tap} from 'rxjs/operators';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  constructor(private apiService: ApiService) {
  }

  newCustomer: Customer;
  customer: Customer;

  getAll(): Observable<Customer[]> {
    return this.apiService.get<Customer[]>('customers');
  }

  getById(id: number) {
    const uri = 'customers';
    return this.apiService.get(uri, id).pipe(first());
  }

  updateCustomer(updatedCustomer: Customer): Observable<Customer> {
    const uri = 'customers/';
    return this.apiService.put<Customer>(uri + updatedCustomer.customerId, updatedCustomer);
  }

  save(customer: any): Observable<object> {
    const uri = 'customers';
    return this.apiService.post(uri, customer);
  }


  delete(id: number) {
    const uri = 'customers/';
    return this.apiService.delete<void>(uri + id);
  }

  getEmptyCustomer() {
    return this.newCustomer = new Customer(null, '', '', '', '',
      '', '', '', '', '', null, null,
      null);
  }
}
