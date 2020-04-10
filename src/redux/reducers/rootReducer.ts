import { combineReducers } from 'redux';
import { orderReducer } from './orderReducer';
import { searchReducer } from './searchReducer';
import { sortReducer } from './sortReducer';

export const rootReducer = combineReducers({
  orderReducer,
  searchReducer,
  sortReducer,
});
