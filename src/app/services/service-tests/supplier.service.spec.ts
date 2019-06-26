import {TestBed} from '@angular/core/testing';

import {SupplierService} from '../supplier.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {ApiService} from '../api.service';
import {AuthorizationService} from '../authorization.service';
import {Supplier} from '../../models/supplier.model';

describe('SupplierService', () => {
  let httpTestingController: HttpTestingController;
  let service: SupplierService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SupplierService, ApiService, AuthorizationService],
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(SupplierService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should correctly return all suppliers', () => {
    service.getAll().subscribe();

    const call = httpTestingController.expectOne('http://localhost:8080/api/suppliers', 'Calling API');
    expect(call.request.method).toBe('GET');
  });

  it('should correctly return a specific supplier', () => {
    service.getById(3).subscribe((supplier: Supplier) => {
      expect(supplier.name).toBe('Unilever');
      expect(supplier.note).toBe('Levert niet op donderdag.');
      expect(supplier.contact_person).toBe('Meneer Jan');
    });

    const call = httpTestingController.expectOne('http://localhost:8080/api/suppliers/3', 'Calling API');
    expect(call.request.method).toBe('GET');

    call.flush({
      name: 'Unilever',
      contact_person: 'Meneer Jan',
      supervisor: 'Kees Leider',
      website: 'www.unilever.nl',
      note: 'Levert niet op donderdag.',
      image: 'unilever.jpg'
    });
  });

  it('should delete the given supplier', () => {
    service.delete(3).subscribe((id: number) => {
      expect(id).toBe(3);
    });

    const call = httpTestingController.expectOne('http://localhost:8080/api/suppliers/3', 'Deleterequest to API');
    expect(call.request.method).toBe('DELETE');

    call.flush(3);
  });

  it('should post a supplier', () => {
    const mockSupplier = new Supplier(3, 'Unilever', 'Meneer Jan', 'Kees Leider',
      'www.unilever.nl', 'Levert niet op donderdag.', 'unilever.jpg');

    service.save(mockSupplier).subscribe((supplier: Supplier) => {
      expect(supplier.name).toBe('Unilever');
      expect(supplier.note).toBe('Levert niet op donderdag.');
      expect(supplier.contact_person).toBe('Meneer Jan');
    });

    const call = httpTestingController.expectOne('http://localhost:8080/api/suppliers', 'Post to API');
    expect(call.request.method).toBe('POST');

    call.flush(mockSupplier);
  });

  it('should update a supplier', () => {
    const mockSupplier = service.getEmptySupplier();

    service.updateSupplier(mockSupplier).subscribe((supplier: Supplier) => {
      expect(supplier.name).toEqual('Shell');
    });

    const call = httpTestingController.expectOne('http://localhost:8080/api/suppliers/' + mockSupplier.supplierid, 'Put to API');
    expect(call.request.method).toBe('PUT');

    call.flush({
      name: 'Shell'
    });
  });
});
