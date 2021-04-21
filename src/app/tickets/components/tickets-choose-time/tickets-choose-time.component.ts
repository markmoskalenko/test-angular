import { Component, EventEmitter, Output } from '@angular/core';
import { TimeModel } from '../../../core/global/time.model';

@Component({
  selector: 'app-tickets-choose-time',
  templateUrl: './tickets-choose-time.component.html',
  styleUrls: ['./tickets-choose-time.component.scss']
})
export class TicketsChooseTimeComponent {
  @Output() readonly selectTime: EventEmitter<TimeModel> = new EventEmitter<TimeModel>();

  times: TimeModel[] = [
    {start: '8:00', end: '8:55'},
    {start: '10:00', end: '11:55'},
    {start: '12:00', end: '13:55'},
    {start: '14:00', end: '15:55'},
    {start: '16:00', end: '17:55'},
    {start: '18:00', end: '19:55'},
  ];

  select($event: any): void {
    if ($event) {
      this.selectTime.emit($event);
    }
  }
}
