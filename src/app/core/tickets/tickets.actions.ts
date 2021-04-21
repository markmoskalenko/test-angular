import { createAction, props } from '@ngrx/store';
import { TicketModel } from './ticket.model';
import { TimeModel } from '../global/time.model';

export const loadTickets = createAction(
  '[ticket] load',
  props<{ date: Date, time: TimeModel }>()
);

export const loadTicketsSuccessAction = createAction(
  '[ticket] load success',
  props<{ tickets: TicketModel[] }>()
);

export const loadTicketsFailureAction = createAction(
  '[ticket] load failure',
  props<{ httpError: any }>()
);
