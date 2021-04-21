import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tickets-choose-date',
  templateUrl: './tickets-choose-date.component.html',
  styleUrls: ['./tickets-choose-date.component.scss']
})
export class TicketsChooseDateComponent  {
  @Output() selectDate: EventEmitter<Date> = new EventEmitter<Date>();
  selectedDate: Date | undefined;
  startDate = new Date();

  select(date: Date): void {
    this.selectedDate = date;
    this.selectDate.emit(date);
  }
}
