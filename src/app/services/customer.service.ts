import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, pipe} from 'rxjs';
import {Customer} from '../models/customer.model';
import {environment} from '../../environments/environment';
import {retry, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {
  constructor(private http: HttpClient) {
  }

  customer: Customer;

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(environment.apiHostname + 'customers', {
      headers: new HttpHeaders({
        'Authorization': 'Basic Arthur abc'
      })
    });
  }

  getById(id: number): Observable<Customer> {
    return this.http.get<Customer>(environment.apiHostname + 'customers/' + id).pipe(
      tap(selectedCustomer => console.log(`selectedCustomer = ${JSON.stringify(selectedCustomer)}`))
    );


  }

  updateCustomer(updatedCustomer: Customer): Observable<Customer> {
    return this.http.put<Customer>(environment.apiHostname + 'customers/' + updatedCustomer.customerId, updatedCustomer);
  }

  save(customer: any): Observable<object> {
    return this.http.post(environment.apiHostname + 'customers/', customer);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(environment.apiHostname + 'customers/' + id);
  }
}
