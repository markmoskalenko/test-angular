import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TicketModel } from './ticket.model';
import { TimeModel } from '../global/time.model';

@Injectable({
  providedIn: 'root'
})
export class TicketsHttpService {
  list(date: Date, time: TimeModel): Observable<TicketModel[]> {
    return of([
      {id: 1, name: 'Ticket 1', date: date.toISOString(), time, count: 0, price: 200},
      {id: 2, name: 'Ticket 2', date: date.toISOString(), time, count: 0, price: 300},
      {id: 3, name: 'Ticket 3', date: date.toISOString(), time, count: 0, price: 100},
      {id: 4, name: 'Ticket 4', date: date.toISOString(), time, count: 0, price: 400},
      {id: 5, name: 'Ticket 5', date: date.toISOString(), time, count: 0, price: 500},
      {id: 6, name: 'Ticket 6', date: date.toISOString(), time, count: 0, price: 300},
    ]);
  }
}
