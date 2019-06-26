import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {first} from 'rxjs/operators';
import {Supplier} from '../models/supplier.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  constructor(private apiService: ApiService) {
  }

  newSupplier: Supplier;
  supplier: Supplier;

  getAll(): Observable<Supplier[]> {
    return this.apiService.get<Supplier[]>('suppliers');
  }

  getById(id: number) {
    const uri = 'suppliers';
    return this.apiService.get(uri, id).pipe(first());
  }

  updateSupplier(updatedCustomer: Supplier): Observable<Supplier> {
    const uri = 'suppliers/';
    return this.apiService.put<Supplier>(uri + updatedCustomer.supplierid, updatedCustomer);
  }

  save(customer: any): Observable<object> {
    const uri = 'suppliers';
    return this.apiService.post(uri, customer);
  }

  delete(id: number) {
    const uri = 'suppliers/';
    return this.apiService.delete<void>(uri + id);
  }

  deleteContract(id: number, contractId) {
    const uri = 'suppliers/';
    return this.apiService.delete<void>(uri + id + '/' + contractId);
  }

  getEmptySupplier() {
    this.newSupplier = new Supplier(null, '', '', '',
      '', '', '');
    this.newSupplier.email_addresses = [];
    this.newSupplier.phone_numbers = [];
    this.newSupplier.addresses = [];
    this.newSupplier.contracts = [];

    return this.newSupplier;
  }
}
