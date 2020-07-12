import { TestBed } from '@angular/core/testing';

import { GlobalElementsService } from './global-elements.service';

describe('GlobalElementsService', () => {
  let service: GlobalElementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalElementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
