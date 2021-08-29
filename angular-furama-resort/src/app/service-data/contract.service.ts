import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer';
import {Contract} from '../model/contract';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  private API_URL_CONTRACT = "http://localhost:3000/contracts\n";

  constructor(private httpClient: HttpClient) {
  }

  getALlContract(): Observable<Contract[]> {
    return this.httpClient.get<Contract[]>(this.API_URL_CONTRACT);
  }

  findById(id: number): Observable<Contract> {
    return this.httpClient.get<Contract>(this.API_URL_CONTRACT + '/' + id);
  }

  upDateContract(id: number, contract: Contract): Observable<Contract> {
    return this.httpClient.put<Contract>(this.API_URL_CONTRACT + '/' + id , contract);
  }

  saveContract(contract: Contract): Observable<Contract>{
    return this.httpClient.post<Contract>(this.API_URL_CONTRACT ,contract)
  }

  removeContract(id: number): Observable<Contract>{
    return this.httpClient.delete<Contract>(this.API_URL_CONTRACT + "/" +id)
  }
}
