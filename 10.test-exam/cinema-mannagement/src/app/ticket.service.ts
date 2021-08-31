import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Ticket} from './ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private API_URL = 'http://localhost:3000/tickets';
  constructor(private httpClient: HttpClient) {
  }

  getAllTicket(): Observable<Ticket[]> {
    return this.httpClient.get<Ticket[]>(this.API_URL);
  }

  findById(id: number): Observable<Ticket> {
    return this.httpClient.get<Ticket>(this.API_URL + '/' + id);
  }


  saveCustomer(ticket: Ticket): Observable<Ticket> {
    return this.httpClient.post<Ticket>(this.API_URL, ticket);
  }

  removeCustomer(id: number): Observable<Ticket> {
    return this.httpClient.delete<Ticket>(this.API_URL + '/' + id);
  }

}
