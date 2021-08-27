import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API_PRODUCT = "http://localhost:3000/products"

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.API_PRODUCT)
  }

  saveProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.API_PRODUCT, product)
  }

  findById(id: number) {
    return this.httpClient.get<Product>(this.API_PRODUCT + "/" + id)
  }

  updateProduct(id:number, product: Product): Observable<Product> {
   return  this.httpClient.put(this.API_PRODUCT + "/" + id, product)
  }

  deleteProduct(id: number): Observable<Product>{
   return  this.httpClient.delete(this.API_PRODUCT + '/' + id)
  }
}
