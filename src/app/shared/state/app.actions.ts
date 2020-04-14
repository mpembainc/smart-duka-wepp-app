import { Product } from './../product.model';

export class InitializeState {
  static readonly type = '[App] Initialize';
}

export class LoadProducts {
  static readonly type = '[App] Load Products';
}

export class AddProduct {
  static readonly type = '[App] Add';
  constructor(public payload: Product) { }
}

