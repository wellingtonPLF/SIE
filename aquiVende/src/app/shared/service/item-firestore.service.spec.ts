import { TestBed } from '@angular/core/testing';

import { ItemFirestoreService } from './item-firestore.service';

describe('ItemFirestoreService', () => {
  let service: ItemFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
