/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ExistenciaArticuloService } from './existencia-articulo.service';

describe('Service: ExistenciaArticulo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExistenciaArticuloService]
    });
  });

  it('should ...', inject([ExistenciaArticuloService], (service: ExistenciaArticuloService) => {
    expect(service).toBeTruthy();
  }));
});
