import { combineReducers } from 'redux';
import questions from './questions';
import answers from './answers';

const questionsAndAnswers = combineReducers({
  questions,
  answers
});

export default questionsAndAnswers;
