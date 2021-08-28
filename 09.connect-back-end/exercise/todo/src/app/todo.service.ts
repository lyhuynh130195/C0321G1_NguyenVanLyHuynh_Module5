import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Todo} from "./todo";
import {Observable} from "rxjs";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private API_TODO = "http://localhost:3000/todo";

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.API_TODO)
  }

  compelete(id: number, todo: Todo): Observable<Todo> {
    return this.httpClient.put<Todo>(this.API_TODO + "/" + id, todo)
  }

  save(todo: Todo): Observable<Todo> {
    return this.httpClient.post<Todo>(this.API_TODO, todo)
  }

  findById(id: number): Observable<Todo> {
    return this.httpClient.get<Todo>(this.API_TODO + "/" + id)
  }

  remove(id: number): Observable<Todo> {
    return this.httpClient.delete(this.API_TODO + "/" + id)
  }
}
