import { Component, Input, OnInit } from '@angular/core';
import { TicketModel } from '../../../core/tickets/ticket.model';
import { TicketsService } from '../../../core/tickets/tickets.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.scss']
})
export class TicketsListComponent implements OnInit {
  @Input() tickets: TicketModel[] = [];
  dataSource = new MatTableDataSource<TicketModel>();

  displayedColumns: string[] = ['id', 'name', 'date', 'time', 'counter'];

  constructor(private orderTicket: TicketsService) {
  }

  ngOnInit(): void {
    this.dataSource.data = this.tickets;
  }

  order(count: number, ticket: TicketModel): void {
    this.orderTicket.orderTicket(count, ticket);
  }
}
