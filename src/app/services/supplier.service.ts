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
    return this.apiService.put<Supplier>(uri + updatedCustomer.id, updatedCustomer);
  }

  save(customer: any): Observable<object> {
    const uri = 'suppliers';
    return this.apiService.post(uri, customer);
  }

  delete(id: number) {
    const uri = 'suppliers/';
    return this.apiService.delete<void>(uri + id);
  }
}