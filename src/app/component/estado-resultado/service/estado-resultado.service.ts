import { Injectable } from '@angular/core';
import { EstadoResultadoClass } from '../model/estado-resultado.model';
import { HttpClient } from '@angular/common/http';
import { APP } from '../../../app.constants';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EstadoResultadoService {

  apiEndpoint = APP.apiEndpoint;

  constructor(
    private http: HttpClient
  ) { }

  reporte(data: EstadoResultadoClass){
    var url = `${this.apiEndpoint}/estado-resultado`;
    return this.http.post(url, data).pipe(
      map((data: any) => {
        return data
      })
    )
  }

}
