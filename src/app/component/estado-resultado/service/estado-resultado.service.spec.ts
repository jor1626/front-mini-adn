/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EstadoResultadoService } from './estado-resultado.service';

describe('Service: EstadoResultado', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EstadoResultadoService]
    });
  });

  it('should ...', inject([EstadoResultadoService], (service: EstadoResultadoService) => {
    expect(service).toBeTruthy();
  }));
});
