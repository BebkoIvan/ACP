import { TestBed } from '@angular/core/testing';

import { WorkshopResolverService } from './workshop-resolver.service';

describe('WorkshopResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkshopResolverService = TestBed.get(WorkshopResolverService);
    expect(service).toBeTruthy();
  });
});
