import { TestBed } from '@angular/core/testing';

import { SesionUsersService } from './sesion-users.service';

describe('SesionUsersService', () => {
  let service: SesionUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SesionUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
