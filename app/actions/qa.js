import * as types from '../constants/ActionTypes';

export function choseAnswer(questionId, answer) {
  return { type: types.CHOSE_ANSWER, questionId, answer};
}
