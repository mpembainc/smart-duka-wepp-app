import { ProductService } from 'src/app/shared/product.service';
import { AddProduct, InitializeState, LoadProducts } from './app.actions';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { Product } from './../product.model';
import { map } from 'rxjs/operators';

export class AppStateModel {
  products: Product[];
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    products: []
  }
})

export class AppState {
  constructor(private productService: ProductService) { }

  @Selector()
  static getProducts(state: AppStateModel) {
    return state.products;
  }

  // Initialization
  @Action(InitializeState)
  initializeState(ctx: StateContext<AppStateModel>) {
    ctx.dispatch([LoadProducts]);
  }

  @Action(AddProduct)
  addProduct({ getState, patchState }: StateContext<AppStateModel>, { payload }: AddProduct) {
    const state = getState();
    patchState({ products: [...state.products, payload] });
  }

  @Action(LoadProducts)
  loadProducts({ patchState }: StateContext<AppStateModel>) {
    return this.productService.getProducts().pipe(
      map(products => patchState({ products }))
    );
  }
}
