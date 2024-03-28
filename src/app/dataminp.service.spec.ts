import { TestBed } from '@angular/core/testing';

import { DataminpService } from './dataminp.service';

describe('DataminpService', () => {
  let service: DataminpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataminpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
