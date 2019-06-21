import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {ApiService} from '../api.service';
import {AuthorizationService} from '../authorization.service';
import {EventlocationService} from '../eventlocation.service';
import {EventLocation} from '../../models/event-location.model';

describe('EventlocationService', () => {
  let httpTestingController: HttpTestingController;
  let service: EventlocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventlocationService, ApiService, AuthorizationService],
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(EventlocationService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should correctly return all event locations', () => {
    service.getAll().subscribe();

    const call = httpTestingController.expectOne('http://localhost:8080/api/eventlocation', 'Calling API');
    expect(call.request.method).toBe('GET');
  });

  it('should correctly return a specific event location', () => {
    service.getById(3).subscribe((eventLocation: EventLocation) => {
      expect(eventLocation.name).toBe('Eindhoven');
    });

    const call = httpTestingController.expectOne('http://localhost:8080/api/eventlocation/3', 'Calling API');
    expect(call.request.method).toBe('GET');

    call.flush({
      name: 'Eindhoven',
      description: 'Stad in Brabant.',
      routePicture: 'eindhoven.jpg'
    });
  });

  it('should delete the given event location', () => {
    service.delete(3).subscribe((id: number) => {
      expect(id).toBe(3);
    });

    const call = httpTestingController.expectOne('http://localhost:8080/api/eventlocation/3', 'Deleterequest to API');
    expect(call.request.method).toBe('DELETE');

    call.flush(3);
  });

  it('should post an event location', () => {
    const mockEventLocation = new EventLocation(3, 'Alkmaar', 'Stad in Noord-Holland.',
      'eindhoven.jpg');

    service.save(mockEventLocation).subscribe((eventLocation: EventLocation) => {
      expect(eventLocation.name).toEqual('Alkmaar');
      expect(eventLocation.description).toEqual('Stad in Noord-Holland.');
    });

    const call = httpTestingController.expectOne('http://localhost:8080/api/eventlocation', 'Post to API');
    expect(call.request.method).toBe('POST');

    call.flush(mockEventLocation);
  });

  it('should update an event location', () => {
    const mockEventLocation = service.getEmptyEventLocation();
    mockEventLocation.id = 3;

    service.updateLocation(mockEventLocation).subscribe((eventLocation: EventLocation) => {
      expect(eventLocation.name).toEqual('Tilburg');
    });

    const call = httpTestingController.expectOne('http://localhost:8080/api/eventlocation/' + mockEventLocation.id,
      'Put to API');
    expect(call.request.method).toBe('PUT');

    call.flush({
      name: 'Tilburg'
    });
  });
});
