import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<{ status: number, data: Product[] }>(this.url).pipe(
      map(response => response.data)
    );
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<{ status: number, data: Product }>(this.url, product).pipe(
      map(response => response.data)
    );
  }
}
