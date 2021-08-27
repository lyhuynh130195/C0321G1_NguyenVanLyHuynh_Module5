import {Injectable} from '@angular/core';
import {Category} from '../model/category';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private API_CATEGORY = "http://localhost:3000/category";

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.API_CATEGORY)
  }

  saveCategory(category): Observable<Category> {
    return this.httpClient.post(this.API_CATEGORY, category);
  }

  findById(id: number): Observable<Category> {
    return this.httpClient.get<Category>(this.API_CATEGORY + "/" + id)
  }

  updateCategory(id: number, category: Category): Observable<Category> {
    return this.httpClient.put(this.API_CATEGORY + "/" + id, category)
  }

  deleteCategory(id: number): Observable<Category> {
    return this.httpClient.delete(this.API_CATEGORY + "/" + id)
  }
}
