import { TestBed } from '@angular/core/testing';

import { OneWorkshopResolverService } from './one-workshop-resolver.service';

describe('OneWorkshopResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OneWorkshopResolverService = TestBed.get(OneWorkshopResolverService);
    expect(service).toBeTruthy();
  });
});
