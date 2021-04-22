import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { TicketModel } from './ticket.model';
import { loadTicketsSuccessAction, orderTicketAction } from './tickets.actions';
import { ticketsFeatureKey } from './tickets.key';

export interface TicketState extends EntityState<TicketModel> {
}

const adapter = createEntityAdapter<TicketModel>();

const initialState = adapter.getInitialState();

const reducer = createReducer(
  initialState,
  on(loadTicketsSuccessAction, (state, action) => adapter.setAll(action.tickets, state)),
  on(orderTicketAction, (state, action) => adapter.updateOne({
    id: action.ticket.id,
    changes: {...action.ticket, count: action.count},
  }, state)),
);

export function ticketsReducer(state: TicketState, action: Action) {
  return reducer(state, action);
}

export const selectTicketState = createFeatureSelector<TicketState>(ticketsFeatureKey);

const {
  selectAll,
} = adapter.getSelectors();

export const selectTicketList = createSelector(selectTicketState, selectAll);

export const selectSelectedTickets = createSelector(
  selectTicketList,
  (tickets) => tickets.filter(_ => _.count > 0)
);

export const selectIsExistsSelectedTickets = createSelector(
  selectSelectedTickets,
  (tickets) => tickets.length > 0
);

export const selectPriceSumTickets = createSelector(
  selectSelectedTickets,
  (tickets) => tickets.reduce((a, b) => {
    return a + (b.price * b.count);
  }, 0)
);
