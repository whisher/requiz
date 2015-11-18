import fetch from 'isomorphic-fetch';
import { REQUEST_QUESTIONS,
  RECEIVE_QUESTIONS,
  CHOSE_ANSWER,
  SUBMIT_FOR_SOLUTIONS } from '../constants';

const QUESTIONS_URL = '/questions';

function requestQuestions() {
  return {
    type: REQUEST_QUESTIONS
  };
}

function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions: questions
  };
}

export function fetchQuestions() {
  return function thunk(dispatch) {
    dispatch(requestQuestions());
    return fetch(QUESTIONS_URL)
      .then(response => {
        if (response.status >= 400) {
          throw new Error('Bad response from server');
        }
        return response.json();
      })
      .then(questions => dispatch(receiveQuestions(questions)) );
  };
}

export function choseAnswer(questionId, option) {
  return { type: CHOSE_ANSWER, questionId, option};
}

export function submitForSolutions(flag) {
  return { type: SUBMIT_FOR_SOLUTIONS, flag};
}

