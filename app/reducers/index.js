import { combineReducers } from 'redux';
import items from './questions';
import answers from './answers';

const rootReducer =  combineReducers({
  items,
  answers
});

export default rootReducer;
