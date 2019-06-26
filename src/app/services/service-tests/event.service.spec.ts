import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {EventService} from '../event.service';
import {TestBed} from '@angular/core/testing';
import {EventModel} from '../../models/event.model';
import {Supplier} from '../../models/supplier.model';
import {EventLocation} from '../../models/event-location.model';
import {ApiService} from '../api.service';
import {AuthorizationService} from '../authorization.service';

describe('EventService', () => {
  let httpTestingController: HttpTestingController;
  let service: EventService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventService, ApiService, AuthorizationService],
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(EventService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should correctly return all events', () => {
    service.getAll().subscribe();

    const call = httpTestingController.expectOne('http://localhost:8080/api/events', 'Calling API');
    expect(call.request.method).toBe('GET');
  });

  it('should correctly return a specific event', () => {
    service.getById(3).subscribe((event: EventModel) => {
      expect(event.name).toBe('Fietsen');
    });

    const call = httpTestingController.expectOne('http://localhost:8080/api/events/3', 'Calling API');
    expect(call.request.method).toBe('GET');

    call.flush({
      supplier: new Supplier(3, 'Testleverancier', 'Testman', 'Testsupervisor',
        'www.test.nl', 'notitie test', 'image.jpg'),
      location: new EventLocation(3, 'Amsterdam', 'Stad in Nederland', 'route.jpg'),
      ownEvent: true,
      name: 'Fietsen',
      description: 'Frisse lucht',
      program: 'Fietsen in Amsterdam, hele middag lang',
      duration: '1:30 uur',
      options: 'Elektrische fiets',
      pricePerPerson: 10,
      btw: 21,
      note: 'Neem zonnebrand mee',
      maxinstructors: 5
    });
  });

  it('should delete the given event', () => {
    service.delete(3).subscribe((id: number) => {
      expect(id).toBe(3);
    });

    const call = httpTestingController.expectOne('http://localhost:8080/api/events/3', 'Deleterequest to API');
    expect(call.request.method).toBe('DELETE');

    call.flush(3);
  });

  it('should post an event', () => {
    const mockSupplier = new Supplier(3, 'Testleverancier', 'Testman', 'Testsupervisor',
      'www.test.nl', 'notitie test', 'image.jpg');
    const mockEventLocation = new EventLocation(3, 'Amsterdam', 'Stad in Nederland', 'route.jpg');
    const mockEvent = new EventModel(3, mockSupplier, mockEventLocation, null, null,
      null, true, 'Fietsen', '', 'Fietsen in Amsterdam, hele middag lang',
      '1:30 uur', 'Elektrische fiets', 10, 10, 21,
      'Neem zonnebrand mee', 5);

    service.save(mockEvent, mockSupplier, mockEventLocation).subscribe((event: EventModel) => {
      expect(event.name).toEqual('Fietsen');
      expect(event.location.name).toEqual('Amsterdam');
      expect(event.supplier.name).toEqual('Testleverancier');
    });

    const call = httpTestingController.expectOne('http://localhost:8080/api/events/'
      + mockSupplier.supplierid + '/' + mockEventLocation.id, 'Post to API');
    expect(call.request.method).toBe('POST');

    call.flush(mockEvent);
  });

  it('should update an event', () => {
    const mockEvent = service.getEmptyEvent();
    mockEvent.id = 3;
    const mockSupplier = new Supplier(3, 'Testleverancier', 'Testman', 'Testsupervisor',
      'www.test.nl', 'notitie test', 'image.jpg');
    const mockEventLocation = new EventLocation(3, 'Amsterdam', 'Stad in Nederland', 'route.jpg');

    service.updateEvent(mockEvent, mockSupplier, mockEventLocation).subscribe((event: EventModel) => {
      expect(event.name).toEqual('Voetballen');
    });

    const call = httpTestingController.expectOne('http://localhost:8080/api/events/' + mockEvent.id
      + '/' + mockSupplier.supplierid + '/' + mockSupplier.supplierid, 'Put to API');
    expect(call.request.method).toBe('PUT');

    call.flush({
      name: 'Voetballen'
    });
  });
});
