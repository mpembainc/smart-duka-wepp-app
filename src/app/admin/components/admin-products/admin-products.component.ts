import { AppState } from './../../../shared/state/app.state';
import { Product } from './../../../shared/product.model';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent {
  @Select(AppState.getProducts) productList$: Observable<Product[]>;
  products$ = this.productList$;

  constructor() { }

  filterProduct(event) {
    const value = event.target.value.toLowerCase();
    this.products$ = this.productList$.pipe(
      map(products => products.filter(product => {
        return (product.title.toLowerCase().indexOf(value) >= 0);
      }))
    );
  }
}
