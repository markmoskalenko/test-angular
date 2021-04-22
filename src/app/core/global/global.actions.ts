import { createAction, props } from '@ngrx/store';
import { TimeModel } from './time.model';
import { OrderFormModel } from './order-form.model';

export const setOrderForm = createAction(
  '[global] set order form',
  props<{ form: OrderFormModel }>()
);

export const setSelectedDate = createAction(
  '[global] set selected date',
  props<{ date: Date }>()
);

export const setSelectedTime = createAction(
  '[global] set selected time',
  props<{ time: TimeModel }>()
);
