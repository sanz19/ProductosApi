import { TestBed } from '@angular/core/testing';

import { ProductsapiService } from './productsapi.service';

describe('ProductsapiService', () => {
  let service: ProductsapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
