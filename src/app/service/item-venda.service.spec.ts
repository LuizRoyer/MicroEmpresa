import { TestBed } from '@angular/core/testing';

import { ItemVendaService } from './item-venda.service';

describe('ItemVendaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemVendaService = TestBed.get(ItemVendaService);
    expect(service).toBeTruthy();
  });
});
