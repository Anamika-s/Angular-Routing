import { TestBed } from '@angular/core/testing';

import { StudenthttpService } from './studenthttp.service';

describe('StudenthttpService', () => {
  let service: StudenthttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudenthttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
