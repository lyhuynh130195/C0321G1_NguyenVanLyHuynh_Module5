import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer';
import {CustomerType} from '../model/customertype';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerTypes: CustomerType[] = [
    {
      id: 1,
      name: 'diamond'
    },
    {
      id: 2,
      name: 'platinum'
    },
    {
      id: 3,
      name: 'gold'
    },
    {
      id: 4,
      name: 'silver'
    },
  ];
  private API_URL_CUSTOMER = 'http://localhost:3000/customers\n';

  constructor(private httpClient: HttpClient) {
  }

  getALlCustomer(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API_URL_CUSTOMER);
  }

  findById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.API_URL_CUSTOMER + '/' + id);
  }

  upDateCustomer(id: number, customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(this.API_URL_CUSTOMER + '/' + id, customer);
  }

  saveCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.API_URL_CUSTOMER, customer);
  }

  removeCustomer(id: number): Observable<Customer> {
    return this.httpClient.delete<Customer>(this.API_URL_CUSTOMER + '/' + id);
  }

  searchCustomer(name: string): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.API_URL_CUSTOMER + '?name_like=' + name);
  }

  getAllCustomerType(){
    return this.customerTypes;
  }
}
