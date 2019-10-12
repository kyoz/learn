import { TestBed } from '@angular/core/testing';

import { LibraryOneService } from './library-one.service';

describe('LibraryOneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibraryOneService = TestBed.get(LibraryOneService);
    expect(service).toBeTruthy();
  });
});
