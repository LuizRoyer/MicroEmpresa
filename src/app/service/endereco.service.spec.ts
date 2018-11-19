import { TestBed } from '@angular/core/testing';

import { EnderecoService } from './endereco.service';

describe('EnderecoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnderecoService = TestBed.get(EnderecoService);
    expect(service).toBeTruthy();
  });
});
