import { Action, createReducer, on } from '@ngrx/store';
import { TimeModel } from './time.model';
import { setSelectedDate, setSelectedTime, setOrderForm } from './global.actions';
import { OrderFormModel } from './order-form.model';

export interface GlobalState {
  selectedDate: Date | undefined;
  selectedTime: TimeModel | undefined;
  orderForm: OrderFormModel | undefined;
}

const initialState: GlobalState = {
  selectedDate: undefined,
  selectedTime: undefined,
  orderForm: {
    email: '',
    firstName: '',
    lastName: '',
    address: {
      street: '',
      city: '',
      state: '',
      zip: ''
    },
    policy: false,
    gender: 'male',
  }
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
  })),
  on(setOrderForm, (state, action) => ({
    ...state,
    orderForm: action.form,
  }))
);

export function globalReducer(state: GlobalState | undefined, action: Action) {
  return reducer(state, action);
}
