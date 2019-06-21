import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {ApiService} from '../api.service';
import {AuthorizationService} from '../authorization.service';
import {CateringService} from '../catering.service';
import {Catering} from '../../models/catering.model';
import {Supplier} from '../../models/supplier.model';

describe('CateringService', () => {
  let httpTestingController: HttpTestingController;
  let service: CateringService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CateringService, ApiService, AuthorizationService],
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(CateringService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should correctly return all catering appointments', () => {
    service.getAll().subscribe();

    const call = httpTestingController.expectOne('http://localhost:8080/api/caterings', 'Calling API');
    expect(call.request.method).toBe('GET');
  });

  it('should correctly return a specific catering appointment', () => {
    service.getById(3).subscribe((catering: Catering) => {
      expect(catering.cateringName).toBe('Jumbo');
      expect(catering.city).toBe('Leiden');
      expect(catering.supplier.name).toBe('Testleverancier');
    });

    const call = httpTestingController.expectOne('http://localhost:8080/api/caterings/3', 'Calling API');
    expect(call.request.method).toBe('GET');

    call.flush({
      supplier: new Supplier(3, 'Testleverancier', 'Testman', 'Testsupervisor',
        'www.test.nl', 'notitie test', 'image.jpg'),
      supplierContracts: null,
      cateringName: 'Jumbo',
      contactPerson: 'Klaasje',
      zipcode: '1263XD',
      address: 'Straat 13',
      city: 'Leiden',
      phone: '0610011001',
      cateringPrice: 12,
      note: 'Zakelijke test notitie'
    });
  });

  it('should delete the given catering appointment', () => {
    service.delete(3).subscribe((id: number) => {
      expect(id).toBe(3);
    });

    const call = httpTestingController.expectOne('http://localhost:8080/api/caterings/3', 'Deleterequest to API');
    expect(call.request.method).toBe('DELETE');

    call.flush(3);
  });

  it('should post a catering appointment', () => {
    const mockSupplier = new Supplier(3, 'Testleverancier', 'Testman', 'Testsupervisor',
      'www.test.nl', 'notitie test', 'image.jpg');

    const mockCatering = {
      id: 3,
      supplier: mockSupplier,
      supplierContracts: null,
      cateringName: 'Jumbo',
      contactPerson: 'Klaasje',
      zipcode: '1263XD',
      address: 'Straat 13',
      city: 'Leiden',
      phone: '0610011001',
      cateringPrice: 12,
      note: 'Zakelijke test notitie'
    };

    service.save(mockCatering, mockSupplier).subscribe((catering: any) => {
      expect(catering.cateringName).toEqual('Jumbo');
    });

    const call = httpTestingController.expectOne('http://localhost:8080/api/caterings/'
      + mockCatering.id + '/' + mockSupplier.supplierid, 'Post to API');
    expect(call.request.method).toBe('POST');

    call.flush(mockCatering);
  });
});
