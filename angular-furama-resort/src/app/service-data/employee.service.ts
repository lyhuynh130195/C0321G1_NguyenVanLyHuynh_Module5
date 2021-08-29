import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private API_URL_EMPLOYEE = "http://localhost:3000/employees\n";

  constructor(private httpClient: HttpClient) {
  }

  getALlEmployee(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.API_URL_EMPLOYEE);
  }

  findById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(this.API_URL_EMPLOYEE + '/' + id);
  }

  upDateEmployee(id: number, employee: Employee): Observable<Employee> {
    return this.httpClient.put<Employee>(this.API_URL_EMPLOYEE + '/' + id , employee);
  }

  saveCustomer(employee: Employee): Observable<Employee>{
    return this.httpClient.post<Employee>(this.API_URL_EMPLOYEE ,employee)
  }

  removeCustomer(id: number): Observable<Employee>{
    return this.httpClient.delete<Employee>(this.API_URL_EMPLOYEE + "/" +id)
  }
}
