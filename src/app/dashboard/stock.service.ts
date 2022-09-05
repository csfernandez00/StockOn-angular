import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  lastAdded: number = 0;
  constructor(private readonly http: HttpClient) {
    this.getProducts();
  }

  // CRUD requests
  getProducts(): Observable<any> {
    return this.http.get('http://localhost:3002/products/');
  }

  postProduct(product: Product) {
    this.http
      .post('http://localhost:3002/products/', product)
      .subscribe((data) => {});
    this.lastAdded++;
  }

  deleteProduct(id: number) {
    this.http
      .delete(`http://localhost:3002/products/${id}/delete`)
      .subscribe((data) => {});
    if (this.lastAdded > 0) {
      this.lastAdded--;
    }
  }

  updateProduct(updatedProduct: Product) {
    return this.http.post(
      `http://localhost:3002/products/${updatedProduct.id}/update`,
      updatedProduct
    );
  }
  //CRUD requests end

  restartLastAdded() {
    this.lastAdded = 0;
  }
}
