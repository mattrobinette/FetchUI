import { TestBed } from '@angular/core/testing';

import { dogService } from './dog.service';

describe('dogService', () => {
  let service: dogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(dogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
