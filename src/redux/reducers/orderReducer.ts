import { AnyAction } from 'redux';
import { actionType } from '../actions';
import { data } from '../../api/data';

const orderState: OrderState = {
  order: data,
};

export const orderReducer = (
  state = orderState, action: AnyAction,
): OrderState => {
  switch (action.type) {
    case actionType.SET_ORDER:
      return {
        order: action.order,
      };

    default:
      return state;
  }
};
