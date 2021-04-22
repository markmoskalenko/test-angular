import { Component, Input } from '@angular/core';
import { TicketModel } from '../../../core/tickets/ticket.model';
import { TicketsService } from '../../../core/tickets/tickets.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.scss']
})
export class TicketsListComponent {
  @Input() set tickets(value: TicketModel[]) {
    if (value) {
      this.dataSource.data = value;
    }
  }

  @Input() set sum(value: number) {
    if (value) {
      this.orderSum = value;
    }
  }

  orderSum = 0;

  dataSource = new MatTableDataSource<TicketModel>();
  displayedColumns: string[] = ['id', 'name', 'date', 'time', 'price', 'counter', 'total'];

  constructor(private orderTicket: TicketsService) {
  }

  order(count: number, ticket: TicketModel): void {
    this.orderTicket.orderTicket(count, ticket);
  }
}
