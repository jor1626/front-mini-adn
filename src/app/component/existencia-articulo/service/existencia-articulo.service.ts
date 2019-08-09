import { Injectable } from '@angular/core';
import { APP } from '../../../app.constants';
import { HttpClient } from '@angular/common/http';
import { ExistenciaArticuloClass } from '../model/existencia-articulo.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExistenciaArticuloService {

  apiEndpoint = APP.apiEndpoint;

  constructor(
    private http: HttpClient
  ) { }

  reporte(data: ExistenciaArticuloClass){
    var url = `${this.apiEndpoint}/existencia-articulo`;
    return this.http.post(url, data).pipe(
      map((data: any) => {
        return data
      })
    )
  }
}
