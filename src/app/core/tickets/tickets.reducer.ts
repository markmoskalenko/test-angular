import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { TicketModel } from './ticket.model';
import { loadTicketsSuccessAction } from './tickets.actions';
import { ticketsFeatureKey } from './tickets.key';

export interface TicketState extends EntityState<TicketModel> {
}

const adapter = createEntityAdapter<TicketModel>();

const initialState = adapter.getInitialState();

const reducer = createReducer(
  initialState,
  on(loadTicketsSuccessAction, (state, action) => adapter.setAll(action.tickets, state)),
);

export function ticketsReducer(state: TicketState | undefined, action: Action) {
  return reducer(state, action);
}

export const selectTicketState = createFeatureSelector<TicketState>(ticketsFeatureKey);

const {
  selectAll,
} = adapter.getSelectors();

export const selectTicketList = createSelector(selectTicketState, selectAll);
