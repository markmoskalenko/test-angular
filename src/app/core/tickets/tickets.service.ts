import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { TimeModel } from '../global/time.model';
import { loadTicketsAction, orderTicketAction } from './tickets.actions';
import { selectIsExistsSelectedTickets, selectPriceSumTickets, selectSelectedTickets, selectTicketList } from './tickets.reducer';
import { Observable } from 'rxjs';
import { TicketModel } from './ticket.model';

@Injectable({
  providedIn: 'root',
})
export class TicketsService {
  constructor(private readonly store: Store) {
  }

  orderTicket(count: number, ticket: TicketModel): void {
    this.store.dispatch(orderTicketAction({count, ticket}));
  }

  loadTickets(date: Date, time: TimeModel): void {
    this.store.dispatch(loadTicketsAction({date, time}));
  }

  getTickets(): Observable<TicketModel[]> {
    return this.store.pipe(select(selectTicketList));
  }

  getIsExistsSelectedTickets(): Observable<boolean> {
    return this.store.pipe(select(selectIsExistsSelectedTickets));
  }

  getSelectedTickets(): Observable<TicketModel[]> {
    return this.store.pipe(select(selectSelectedTickets));
  }

  getSum(): Observable<number> {
    return this.store.pipe(select(selectPriceSumTickets));
  }
}
