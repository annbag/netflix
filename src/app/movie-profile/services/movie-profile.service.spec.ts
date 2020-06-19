import { TestBed } from '@angular/core/testing';

import { MovieProfileService } from './movie-profile.service';

describe('MovieProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieProfileService = TestBed.get(MovieProfileService);
    expect(service).toBeTruthy();
  });
});
