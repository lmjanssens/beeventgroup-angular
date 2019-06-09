import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {BaseModel} from '../models/base.model';

export abstract class AbstractService<T extends BaseModel> {
  protected constructor(protected http: HttpClient, protected PATH: string) {
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(environment.apiHostname + this.PATH);
  }

  getById(id: number): Observable<T> {
    return this.http.get<T>(environment.apiHostname + this.PATH + id);
  }

  updateEntity(newEntity: T): Observable<T> {
    return this.http.put<T>(environment.apiHostname + this.PATH + newEntity.id, newEntity);
  }

  save(entity: any): Observable<T> {
    return this.http.post<T>(environment.apiHostname + this.PATH, entity);
  }

  delete(entity: any): Observable<T> {
    return this.http.delete<T>(environment.apiHostname + this.PATH + entity.id);
  }
}
