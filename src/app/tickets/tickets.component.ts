import { Component, OnDestroy, OnInit } from '@angular/core';
import { GlobalService } from '../core/global/global.service';
import { TimeModel } from '../core/global/time.model';
import { combineLatest, Subscription } from 'rxjs';
import { TicketsService } from '../core/tickets/tickets.service';
import { filter } from 'rxjs/operators';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit, OnDestroy {
  private readonly subscriptions$ = new Subscription();

  constructor(
    public readonly globalService: GlobalService,
    public ticketsService: TicketsService) {
  }

  ngOnInit(): void {
    this.subscriptions$.add(
      combineLatest([
        this.globalService.getSelectedDate(),
        this.globalService.getSelectedTime()
      ])
        .pipe(filter(([date, time]) => !!date && !!time))
        .subscribe(([date, time]) => {
          if (date && time) {
            this.ticketsService.loadTickets(date, time);
          }
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }

  selectDate(data: Date): void {
    this.globalService.setSelectedDate(data);
  }

  selectTime(data: TimeModel): void {
    this.globalService.setSelectedTime(data);
  }
}
