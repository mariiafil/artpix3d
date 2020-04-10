import { AnyAction } from 'redux';
import { actionType } from '../actions';

const sortState: SortState = {
  query: 'all',
};

export const sortReducer = (
  state = sortState, action: AnyAction,
): SortState => {
  switch (action.type) {
    case actionType.SET_SORT_QUERY:
      return {
        query: action.query,
      };

    default:
      return state;
  }
};
