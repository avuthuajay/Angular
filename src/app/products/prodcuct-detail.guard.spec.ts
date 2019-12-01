import { TestBed, async, inject } from '@angular/core/testing';

import { ProdcuctDetailGuard } from './prodcuct-detail.guard';

describe('ProdcuctDetailGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProdcuctDetailGuard]
    });
  });

  it('should ...', inject([ProdcuctDetailGuard], (guard: ProdcuctDetailGuard) => {
    expect(guard).toBeTruthy();
  }));
});
