import { INumberRegister } from './../interfaces/number-register.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumberService extends BaseService {

  constructor(
    private http: HttpClient
  ) { 
    super();
  }

  getAlreadyTakenNumbers(): Observable<any> {
    return this.http.get(`${this.url}/number`)
      .pipe(
        map(this.extractData),
        catchError(this.serviceError)
      );
  }

  selectNumber(payload: INumberRegister): Observable<any> {
    return this.http.post(`${this.url}/number`, payload)
      .pipe(
        map(this.extractData),
        catchError(this.serviceError)
    )
  }

  getNextGift(): Observable<any> {
    return this.http.get(`${this.url}/gift`)
      .pipe(
        map(this.extractData),
        catchError(this.serviceError)
    )
  }


}
