import { createAction, props } from '@ngrx/store';
import { TimeModel } from './time.model';

export const setSelectedDate = createAction(
  '[global] set selected date',
  props<{ date: Date }>()
);

export const setSelectedTime = createAction(
  '[global] set selected time',
  props<{ time: TimeModel }>()
);
