import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GlobalState } from './global.reducer';
import { globalFeatureKey } from './global.key';

export const selectGlobalState = createFeatureSelector<GlobalState>(
  globalFeatureKey
);

export const getSelectedDate = createSelector(
  selectGlobalState,
  (state) => state?.selectedDate
);

export const getSelectedTime = createSelector(
  selectGlobalState,
  (state) => state?.selectedTime
);
