import { Component, Input } from '@angular/core';
import { TicketModel } from '../../../core/tickets/ticket.model';

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.scss']
})
export class TicketsListComponent {
  @Input() tickets: TicketModel[] = [];

  displayedColumns: string[] = ['id', 'name', 'date', 'time', 'counter'];

  counterValue($event: any) {
    console.log($event);
  }
}
