import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {BaseModel, instanceOfModel} from '../models/base.model';
import {ApiCredentials} from './api-credentials';

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export abstract class AbstractService<T extends BaseModel> {
  protected constructor(protected http: HttpClient, protected PATH: string) {
  }

  private static credentials: ApiCredentials = new ApiCredentials('Liselot', 'abc');

  private static buildOptions(options?: {}) {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Accept': 'application/json',
        Authorization: AbstractService.credentials.toHeader(),
      }),
      withCredentials: false,
      ...options,
    };
  }

  private static buildPath(path: string) {
    return environment.apiHostname + (path.startsWith('/') ? path.substr(1) : path);
  }

  protected static isModel(object: any): object is BaseModel {
    return instanceOfModel(object);
  }

  getAll(): Observable<T[]> {
    return this.request('GET', this.PATH);
  }

  getById(id: number): Observable<T> {
    return this.http.get<T>(environment.apiHostname + this.PATH + id);
  }

  updateEntity(newEntity: T): Observable<T> {
    return this.http.put<T>(environment.apiHostname + this.PATH + newEntity.id, newEntity);
  }

  save(entity: T): Observable<T> {
    return this.http.post<T>(environment.apiHostname + this.PATH, entity);
  }

  delete(entity: T): Observable<object> {
    // return this.request('DELETE', this.PATH + param);
    return this.http.delete(environment.apiHostname + this.PATH + entity.id);
  }

  protected request<R = T>(method: RequestMethod, path: string, body?: R): Observable<R> {
    if ((method === 'POST' || method === 'PUT') && !body) {
      throw new Error('Parameter body is required when using POST or PUT');
    }
    return this.http.request<R>(method, AbstractService.buildPath(path), AbstractService.buildOptions({body}));
  }
}
