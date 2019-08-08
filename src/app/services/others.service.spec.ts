/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OthersService } from './others.service';

describe('Service: Others', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OthersService]
    });
  });

  it('should ...', inject([OthersService], (service: OthersService) => {
    expect(service).toBeTruthy();
  }));
});
