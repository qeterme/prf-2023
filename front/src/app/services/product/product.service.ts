import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/model/Product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = environment.apiUrl + '/api/products';

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Product[]>(this.baseUrl);
  }

  getProductsRandom() {
    return this.http.get<Product[]>(`${this.baseUrl}/random`);
  }

  getProduct(id: number) {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }

  createProduct(product: Product) {
    return this.http.post<Product>(this.baseUrl, product);
  }

  updateProduct(product: Product) {
    return this.http.put<Product>(`${this.baseUrl}/${product._id}`, product);
  }

  deleteProduct(id: number) {
    return this.http.delete<Product>(`${this.baseUrl}/${id}`);
  }
}
