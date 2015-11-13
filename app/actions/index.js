import * as types from '../constants';

export function choseAnswer(questionId, option) {
  return { type: types.CHOSE_ANSWER, questionId, option};
}

