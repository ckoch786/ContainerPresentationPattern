import { TestBed } from '@angular/core/testing';

import { PublishingABCService } from './publishing-abc.service';

describe('PublishingABCService', () => {
  let service: PublishingABCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublishingABCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
