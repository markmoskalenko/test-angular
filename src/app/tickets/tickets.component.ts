import { Component, OnDestroy, OnInit } from '@angular/core';
import { GlobalService } from '../core/global/global.service';
import { TimeModel } from '../core/global/time.model';
import { combineLatest, Subscription } from 'rxjs';
import { TicketsService } from '../core/tickets/tickets.service';
import { filter } from 'rxjs/operators';
import { TicketModel } from '../core/tickets/ticket.model';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit, OnDestroy {
  private readonly subscriptions$ = new Subscription();
  tickets: TicketModel[] = [];
  orderSum = 0;
  isSelected = false;

  constructor(
    public readonly globalService: GlobalService,
    private readonly ticketsService: TicketsService
  ) {
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

    this.subscriptions$.add(this
      .ticketsService
      .getTickets()
      .subscribe((tickets: TicketModel[]) => this.tickets = tickets)
    );

    this.subscriptions$.add(this
      .ticketsService
      .getIsExistsSelectedTickets()
      .subscribe((isSelected) => this.isSelected = isSelected)
    );

    this.subscriptions$.add(this
      .ticketsService
      .getSum()
      .subscribe((sum) => this.orderSum = sum)
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
