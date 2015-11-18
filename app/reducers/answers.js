import { CHOSE_ANSWER } from '../constants';

export default function answers(state = {}, action) {
  switch (action.type) {
  case CHOSE_ANSWER:
    return Object.assign({}, state, { ['question_'+action.questionId] : +action.option });
  default:
    return state;
  }
}
