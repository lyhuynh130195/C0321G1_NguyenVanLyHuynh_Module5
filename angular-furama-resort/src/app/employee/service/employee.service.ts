import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../model/employee';
import {Division} from '../model/division';
import {Position} from '../model/position';
import {Education} from '../model/education';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private API_URL_EMPLOYEE = 'http://localhost:3000/employees\n';

  divisions: Division[] = [
    {id: 1, name: 'manager'},
    {id: 2, name: 'personnel'},
    {id: 3, name: 'manage'},
  ];
  positions: Position[] = [
    {id: 1, name: 'manager'},
    {id: 2, name: 'sale'},
    {id: 1, name: 'receptionist'},
  ];
  educations: Education[] = [
    {id: 1, name: 'university'},
    {id: 2, name: 'collage'},
    {id: 3, name: 'intermediate'}
  ];

  constructor(private httpClient: HttpClient) {
  }

  getALlEmployee(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.API_URL_EMPLOYEE);
  }

  findById(id: number): Observable<Employee> {
    return this.httpClient.get<Employee>(this.API_URL_EMPLOYEE + '/' + id);
  }

  upDateEmployee(id: number, employee: Employee): Observable<Employee> {
    return this.httpClient.put<Employee>(this.API_URL_EMPLOYEE + '/' + id, employee);
  }

  saveEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(this.API_URL_EMPLOYEE, employee);
  }

  removeEmployee(id: number): Observable<Employee> {
    return this.httpClient.delete<Employee>(this.API_URL_EMPLOYEE + '/' + id);
  }


  public search(name: string, positionName: string): Observable<Employee[]> {
    if (name && positionName) {
      return this.httpClient.get<Employee[]>(this.API_URL_EMPLOYEE + '?name_like=' + name + '&position.name=' + positionName);
    } else if (name) {
      return this.httpClient.get<Employee[]>(this.API_URL_EMPLOYEE + '?name_like=' + name);
    } else if (positionName) {
      return this.httpClient.get<Employee[]>(this.API_URL_EMPLOYEE + '?position.name=' + positionName);
    }
    return this.getALlEmployee();
  }
}
