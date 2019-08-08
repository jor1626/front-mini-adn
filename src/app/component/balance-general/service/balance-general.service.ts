import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP } from '../../../app.constants';
import { BalanceGeneralClass } from '../model/balance-general.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BalancGeneralService {

  apiEndpoint = APP.apiEndpoint;

  constructor(
    private http: HttpClient
  ) { }

  reporte(data: BalanceGeneralClass){
    var url = `${this.apiEndpoint}/balance-general`;
    return this.http.post(url, data).pipe(
      map((data: any) => {
        return data
      })
    )
  }

}
