import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {Clone1} from '../model/clone1';

@Injectable({
  providedIn: 'root'
})
export class CloneService {

  // private baseURL = 'http://localhost:8082/api/v1/websites';
  public baseURLclone = 'http://localhost:8083';

  constructor(private httpClient: HttpClient) { }

  getList(): Observable<Clone1[]> {
    return this.httpClient.get<Clone1[]>(`${this.baseURLclone}/status/clone`);
  }
  //
  // create(employee: Clone1): Observable<Object> {
  //   return this.httpClient.post(`${this.baseURL}`, employee);
  // }
  //
  // getById(id: number): Observable<Clone1> {
  //   return this.httpClient.get<Clone1>(`${this.baseURL}/${id}`);
  // }
  //
  // update(id: number, employee: Website): Observable<Object> {
  //   return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  // }
  //
  // delete(id: number): Observable<Object>{
  //   const url = this.baseURL + '/delete/' + id ;
  //   console.log( url );
  //   return this.httpClient.delete(url);
  // }

  getCloneStatus(): Observable<any> {
    return this.httpClient.get<any>(`${this.baseURLclone}/status/clone`);
  }
}

