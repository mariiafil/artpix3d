import { AnyAction } from 'redux';
import { actionType } from '../actions';

const searchState: SearchState = {
  query: '',
};

export const searchReducer = (
  state = searchState, action: AnyAction,
): SearchState => {
  switch (action.type) {
    case actionType.SET_SEARCH_QUERY:
      return {
        query: action.query,
      };

    default:
      return state;
  }
};
