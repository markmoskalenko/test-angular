import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { TimeModel } from '../global/time.model';
import { loadTickets } from './tickets.actions';
import { selectTicketList } from './tickets.reducer';
import { Observable } from 'rxjs';
import { TicketModel } from './ticket.model';

@Injectable({
  providedIn: 'root',
})
export class TicketsService {
  constructor(private readonly store: Store) {
  }

  loadTickets(date: Date, time: TimeModel): void {
    this.store.dispatch(loadTickets({date, time}));
  }

  getTickets(): Observable<TicketModel[]> {
    return this.store.pipe(select(selectTicketList));
  }
}
