import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../models/customer.model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(environment.apiHostname + 'customers');
  }

  getById(id: number): Observable<Customer> {
    return this.http.get<Customer>(environment.apiHostname + 'customers/' + id);
  }

  updateCustomer(newCustomer: Customer): Observable<Customer> {
    return this.http.put<Customer>(environment.apiHostname + 'customers/' + newCustomer.id, newCustomer);
  }

  save(customer: any): Observable< object > {
    return this.http.post(environment.apiHostname + 'customers/', customer);
  }

  delete(customer: any): Observable<object> {
    return this.http.delete(environment.apiHostname + 'customers/' + customer.id);
  }
}
