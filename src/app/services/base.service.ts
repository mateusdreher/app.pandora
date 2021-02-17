import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService {

  protected url = `${environment.api.uri}`;

  constructor() { }

  protected extractData(response: any) {
    return response.res.data || [];
  }

  protected serviceError(response: Response | any) {
    let customError: string[] = [];
    let customResponse = { error: { errors: [''] } }


    if (response instanceof HttpErrorResponse) {

        if (response.statusText === 'Unknown Error') {
            customError.push('An unknown error has ocurred');
            response.error.errors = customError;
        }
    }

    if (response.status === 500) {
        customError.push('Erro ao processar a solicitação');

        customResponse.error.errors = customError;
        return throwError(customResponse);
    }

    return throwError(response);
  }
  
}
