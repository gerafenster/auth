import { TestBed } from '@angular/core/testing';

import { EventosService } from './eventosService.service';

describe('EventosService', () => {
  let service: EventosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
