import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {ApiService} from '../api.service';
import {AuthorizationService} from '../authorization.service';
import {ReservationService} from '../reservation.service';
import {Order} from '../../models/order.model';
import {Customer} from '../../models/customer.model';
import {EventModel} from '../../models/event.model';
import {Supplier} from '../../models/supplier.model';
import {EventLocation} from '../../models/event-location.model';

describe('ReservationService', () => {
  let httpTestingController: HttpTestingController;
  let service: ReservationService;

  const mockSupplier = new Supplier(3, 'Testleverancier', 'Testman', 'Testsupervisor',
    'www.test.nl', 'notitie test', 'image.jpg');
  const mockEventLocation = new EventLocation(3, 'Amsterdam', 'Stad in Nederland', 'route.jpg');
  const mockEvent = new EventModel(3, mockSupplier, mockEventLocation, null, null,
    null, true, 'Fietsen', '', 'Fietsen in Amsterdam, hele middag lang',
    '1:30 uur', 'Elektrische fiets', 10, 10, 21,
    'Neem zonnebrand mee', 5);
  const mockCustomer = new Customer(3, 'Heer', 'Luuk', null,
    'Janssens', 'Straat 123', '2929KS', 'Nederland', 'm',
    'New York', null, null, null);
  const mockOrder = new Order(3, mockCustomer, '12-04-2019', '14-04-2019', 'Notitie',
    '12:00', '17:00', null,null,  mockEvent, null);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReservationService, ApiService, AuthorizationService],
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(ReservationService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should correctly return all orders', () => {
    service.getAll().subscribe();

    const call = httpTestingController.expectOne('http://localhost:8080/api/orders', 'Calling API');
    expect(call.request.method).toBe('GET');
  });

  it('should correctly return a specific order', () => {
    service.getById(3).subscribe((order: Order) => {
      expect(order.event.name).toBe('Fietsen');
      expect(order.note).toBe('Nog niet betaald.');
    });

    const call = httpTestingController.expectOne('http://localhost:8080/api/orders/3', 'Calling API');
    expect(call.request.method).toBe('GET');

    call.flush({
      customer: mockCustomer,
      event: mockEvent,
      dateorder: '12-04-2019',
      dateevent: '25-07-2019',
      note: 'Nog niet betaald.',
      startTime: '12:00',
      endTime: '17:00',
      cateringOrders: null,
      quotations: null,
      registeredEvents: null
    });
  });

  it('should delete the given order', () => {
    service.delete(3).subscribe((id: number) => {
      expect(id).toBe(3);
    });

    const call = httpTestingController.expectOne('http://localhost:8080/api/orders/3', 'Deleterequest to API');
    expect(call.request.method).toBe('DELETE');

    call.flush(3);
  });

  it('should post an order', () => {
    service.save(mockOrder, mockCustomer, mockEvent).subscribe((order: Order) => {
      expect(order.event.name).toEqual('Fietsen');
      expect(order.dateevent).toEqual('14-04-2019');
    });

    const call = httpTestingController.expectOne('http://localhost:8080/api/orders/'
      + mockCustomer.customerId + '/' + mockEvent.id, 'Post to API');
    expect(call.request.method).toBe('POST');
  });

  it('should update an order', () => {
    service.updateReservation(mockOrder, mockCustomer, mockEvent).subscribe((order: Order) => {
      expect(order.dateevent).toEqual('29-05-2019');
      expect(order.note).toEqual('Notitie');
    });

    const call = httpTestingController.expectOne('http://localhost:8080/api/orders/'
      + mockOrder.orderId + '/' + mockCustomer.customerId + '/' + mockEvent.id);
    expect(call.request.method).toBe('PUT');

    call.flush({
      dateevent: '29-05-2019',
      note: 'Notitie'
    });
  });
});
