import { TestBed } from '@angular/core/testing';

import { DataInfosService } from './data-infos.service';

describe('DataInfosService', () => {
  let service: DataInfosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataInfosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
