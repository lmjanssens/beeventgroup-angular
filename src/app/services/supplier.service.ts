import { Injectable } from '@angular/core';
import {Observable, pipe} from 'rxjs';
import {Supplier} from '../models/supplier.model';
import {first, retry, tap} from 'rxjs/operators';
import {ApiService} from './api.service';

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

  updateSupplier(updatedSupplier: Supplier): Observable<Supplier> {
    const uri = 'suppliers/';
    return this.apiService.put<Supplier>(uri + updatedSupplier.supplierid, updatedSupplier);
  }

  save(supplier: any): Observable<object> {
    const uri = 'suppliers';
    return this.apiService.post(uri, supplier);
  }


  delete(id: number) {
    const uri = 'suppliers/';
    return this.apiService.delete<void>(uri + id);
  }
}
