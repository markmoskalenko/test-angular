import { Component, OnDestroy, OnInit } from '@angular/core';
import { GlobalService } from '../core/global/global.service';
import { TicketsService } from '../core/tickets/tickets.service';
import { TicketModel } from '../core/tickets/ticket.model';
import { Subscription } from 'rxjs';
import { OrderFormModel } from '../core/global/order-form.model';

@Component({
  selector: 'app-thank',
  templateUrl: './thank.component.html',
  styleUrls: ['./thank.component.scss']
})
export class ThankComponent implements OnInit, OnDestroy {
  tickets: TicketModel[] = [];
  orderForm: OrderFormModel | undefined;
  private readonly subscriptions$ = new Subscription();

  constructor(
    private readonly globalService: GlobalService,
    private readonly ticketsService: TicketsService
  ) {
  }

  ngOnInit(): void {
    this.subscriptions$.add(
      this
        .ticketsService
        .getSelectedTickets()
        .subscribe((tickets) => this.tickets = tickets)
    );
    this.subscriptions$.add(
      this
        .globalService
        .getOrderForm()
        .subscribe((orderForm) => this.orderForm = orderForm)
    );
  }

  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
}
