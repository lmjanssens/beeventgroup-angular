import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {ApiService} from '../api.service';
import {AuthorizationService} from '../authorization.service';
import {CustomerService} from '../customer.service';
import {Customer} from '../../models/customer.model';

describe('CustomerService', () => {
  let httpTestingController: HttpTestingController;
  let service: CustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerService, ApiService, AuthorizationService],
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(CustomerService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should correctly return all customers', () => {
    service.getAll().subscribe();

    const call = httpTestingController.expectOne('http://localhost:8080/api/customers', 'Calling API');
    expect(call.request.method).toBe('GET');
  });

  it('should correctly return a specific customer', () => {
    service.getById(3).subscribe((customer: Customer) => {
      expect(customer.first_name).toBe('Luuk');
      expect(customer.last_name).toBe('Janssens');
    });

    const call = httpTestingController.expectOne('http://localhost:8080/api/customers/3', 'Calling API');
    expect(call.request.method).toBe('GET');

    call.flush({
      title: 'Heer',
      first_name: 'Luuk',
      infix: null,
      last_name: 'Janssens',
      address: 'Straat 123',
      zipcode: '2929KS',
      country: 'Nederland',
      gender: 'm',
      city: 'New York',
      email_addressess: null,
      customer_orders: null,
      phone_numbers: null
    });
  });

  it('should delete the given customer', () => {
    service.delete(3).subscribe((id: number) => {
      expect(id).toBe(3);
    });

    const call = httpTestingController.expectOne('http://localhost:8080/api/customers/3', 'Deleterequest to API');
    expect(call.request.method).toBe('DELETE');

    call.flush(3);
  });

  it('should post a customer', () => {
    const mockCustomer = {
      title: 'Heer',
      first_name: 'Luuk',
      infix: null,
      last_name: 'Janssens',
      address: 'Straat 123',
      zipcode: '2929KS',
      country: 'Nederland',
      gender: 'm',
      city: 'New York',
      email_addressess: null,
      customer_orders: null,
      phone_numbers: null
    };

    service.save(mockCustomer).subscribe((customer: any) => {
      expect(customer.first_name).toEqual('Luuk');
      expect(customer.last_name).toEqual('Janssens');
    });

    const call = httpTestingController.expectOne('http://localhost:8080/api/customers', 'Post to API');
    expect(call.request.method).toBe('POST');

    call.flush(mockCustomer);
  });

  it('should update a customer', () => {
    const mockCustomer = new Customer();

    service.updateCustomer(mockCustomer).subscribe((customer: Customer) => {
      expect(customer.first_name).toEqual('Arjan');
    });

    const call = httpTestingController.expectOne('http://localhost:8080/api/customers/' + mockCustomer.customerId, 'Put to API');
    expect(call.request.method).toBe('PUT');

    call.flush({
      first_name: 'Arjan'
    });
  });
});
