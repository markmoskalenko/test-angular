import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { setOrderForm, setSelectedDate, setSelectedTime } from './global.actions';
import { TimeModel } from './time.model';
import { Observable } from 'rxjs';
import { getOrderForm, getSelectedDate, getSelectedTime } from './global.selectors';
import { OrderFormModel } from './order-form.model';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  constructor(private readonly store: Store) {
  }

  setOrderForm(form: OrderFormModel): void {
    this.store.dispatch(setOrderForm({form}));
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

  getOrderForm(): Observable<OrderFormModel | undefined> {
    return this.store.pipe(select(getOrderForm));
  }
}
