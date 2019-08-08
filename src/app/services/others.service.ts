import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP } from '../app.constants';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OthersService {

  private url = APP.apiEndpoint;

  constructor(private http: HttpClient) { }

  public getGrupos() {
    var url = `${this.url}/grupos`;
    return this.http.get(url).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  getExistencias() {
    var url = `${this.url}/existencias`;
    return this.http.get(url).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  getBodegas() {
    var url = `${this.url}/bodegas`;
    return this.http.get(url).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  getNiveles() {
    var url = `${this.url}/niveles`;
    return this.http.get(url).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  getValores() {
    var url = `${this.url}/valores`;
    return this.http.get(url).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  getCentros() {
    var url = `${this.url}/centros`;
    return this.http.get(url).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

}
