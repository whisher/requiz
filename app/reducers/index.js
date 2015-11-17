import { combineReducers } from 'redux';
import items from './questions';
import answers from './answers';
import solutions from './solutions';

const rootReducer =  combineReducers({
  items,
  answers,
  solutions
});

export default rootReducer;
