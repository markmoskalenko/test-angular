import { ActionReducerMap } from '@ngrx/store';
import { globalFeatureKey } from './global';
import { GlobalState, globalReducer } from './global/global.reducer';

export interface AppState {
  [globalFeatureKey]: GlobalState;
}

export const rootReducer: ActionReducerMap<AppState> = {
  [globalFeatureKey]: globalReducer,
};
