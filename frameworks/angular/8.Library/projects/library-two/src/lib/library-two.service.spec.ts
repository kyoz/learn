import { TestBed } from '@angular/core/testing';

import { LibraryTwoService } from './library-two.service';

describe('LibraryTwoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibraryTwoService = TestBed.get(LibraryTwoService);
    expect(service).toBeTruthy();
  });
});
