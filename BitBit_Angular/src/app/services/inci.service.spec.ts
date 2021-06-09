import { TestBed } from '@angular/core/testing';

import { InciService } from './inci.service';

describe('InciService', () => {
  let service: InciService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InciService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
