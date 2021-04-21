import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { setSelectedDate, setSelectedTime } from './global.actions';
import { TimeModel } from './time.model';
import { Observable } from 'rxjs';
import { getSelectedDate, getSelectedTime } from './global.selectors';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  constructor(private readonly store: Store) {
  }

  setSelectedDate(date: Date): void {
    this.store.dispatch(setSelectedDate({date}));
  }

  setSelectedTime(time: TimeModel): void {
    this.store.dispatch(setSelectedTime({time}));
  }

  getSelectedDate(): Observable<Date | undefined> {
    return this.store.pipe(select(getSelectedDate));
  }

  getSelectedTime(): Observable<TimeModel | undefined> {
    return this.store.pipe(select(getSelectedTime));
  }
}
