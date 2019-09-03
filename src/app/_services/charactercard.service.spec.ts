import { TestBed } from '@angular/core/testing';

import { CharactercardService } from './charactercard.service';

describe('CharactercardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CharactercardService = TestBed.get(CharactercardService);
    expect(service).toBeTruthy();
  });
});
