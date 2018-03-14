import { TestBed, inject } from '@angular/core/testing';

import { InmobiliariaService } from './inmobiliaria.service';

describe('InmobiliariaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InmobiliariaService]
    });
  });

  it('should be created', inject([InmobiliariaService], (service: InmobiliariaService) => {
    expect(service).toBeTruthy();
  }));
});
