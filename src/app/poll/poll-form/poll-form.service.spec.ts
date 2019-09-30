import { TestBed } from '@angular/core/testing';

import { PollFormService } from './poll-form.service';

describe('PollFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PollFormService = TestBed.get(PollFormService);
    expect(service).toBeTruthy();
  });
});
