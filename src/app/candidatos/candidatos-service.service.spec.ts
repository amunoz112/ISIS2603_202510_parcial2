/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CandidatosServiceService } from './candidatos-service.service';

describe('Service: CandidatosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CandidatosServiceService]
    });
  });

  it('should ...', inject([CandidatosServiceService], (service: CandidatosServiceService) => {
    expect(service).toBeTruthy();
  }));
});
