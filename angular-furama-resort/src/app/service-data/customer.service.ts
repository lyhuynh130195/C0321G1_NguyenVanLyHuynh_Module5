import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private API_URL_CUSTOMER = " http://localhost:3000/customers\n";

  constructor(private httpClient: HttpClient) {
  }

  getALlCustomer(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API_URL_CUSTOMER);
  }

  findById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.API_URL_CUSTOMER + '/' + id);
  }

  upDateCustomer(id: number, customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(this.API_URL_CUSTOMER + '/' + id , customer);
  }

  saveCustomer(customer: Customer): Observable<Customer>{
    return this.httpClient.post<Customer>(this.API_URL_CUSTOMER ,customer)
  }

  removeCustomer(id: number): Observable<Customer>{
    return this.httpClient.delete<Customer>(this.API_URL_CUSTOMER + "/" +id)
  }
}
