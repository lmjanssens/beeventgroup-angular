import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, pipe} from 'rxjs';
import {Customer} from '../models/customer.model';
import {environment} from '../../environments/environment';
import {first, retry, tap} from 'rxjs/operators';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  constructor(private apiService: ApiService) {
  }

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
}
