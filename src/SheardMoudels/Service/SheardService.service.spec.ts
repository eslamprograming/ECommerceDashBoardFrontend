/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SheardServiceService } from './SheardService.service';

describe('Service: SheardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SheardServiceService]
    });
  });

  it('should ...', inject([SheardServiceService], (service: SheardServiceService) => {
    expect(service).toBeTruthy();
  }));
});
