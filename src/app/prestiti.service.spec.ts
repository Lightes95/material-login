import { TestBed } from '@angular/core/testing';

import { PrestitiService } from './prestiti.service';

describe('PrestitiService', () => {
  let service: PrestitiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrestitiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
