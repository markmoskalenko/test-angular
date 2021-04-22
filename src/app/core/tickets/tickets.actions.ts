import { createAction, props } from '@ngrx/store';
import { TicketModel } from './ticket.model';
import { TimeModel } from '../global/time.model';

export const loadTicketsAction = createAction(
  '[ticket] load',
  props<{ date: Date, time: TimeModel }>()
);

export const orderTicketAction = createAction(
  '[ticket] order ticket',
  props<{ count: number, ticket: TicketModel }>()
);

export const loadTicketsSuccessAction = createAction(
  '[ticket] load success',
  props<{ tickets: TicketModel[] }>()
);

export const loadTicketsFailureAction = createAction(
  '[ticket] load failure',
  props<{ httpError: any }>()
);
