import { Action, createReducer, on } from '@ngrx/store';
import { TimeModel } from './time.model';
import { setSelectedDate, setSelectedTime } from './global.actions';

export interface GlobalState {
  selectedDate: Date | undefined;
  selectedTime: TimeModel | undefined;
}

const initialState: GlobalState = {
  selectedDate: undefined,
  selectedTime: undefined
};

const reducer = createReducer(
  initialState,
  on(setSelectedDate, (state, action) => ({
    ...state,
    selectedDate: action.date,
  })),
  on(setSelectedTime, (state, action) => ({
    ...state,
    selectedTime: action.time,
  }))
);

export function globalReducer(state: GlobalState | undefined, action: Action) {
  return reducer(state, action);
}


//
// export const selectGlobalState = createFeatureSelector<GlobalState>(globalFeatureKey);
//
// const {
//   selectAll,
// } = adapter.getSelectors();
//
// export const selectGlobalModelList = createSelector(selectGlobalState, selectAll);
