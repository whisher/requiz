import { CHOSE_ANSWER } from '../constants';

export default function answers(state = [], action) {
  switch (action.type) {
  case CHOSE_ANSWER:
    let answer = {
      id: action.questionId,
      option: action.option
    };
    let index = state
      .map(question => question.id )
      .indexOf(action.questionId);
    if(index !== -1){
      return [].concat(
        ...state.slice(0, index),
        [answer],
        ...state.slice(index + 1)
      );
    }
    return [...state,answer];
  default:
    return state;
  }
}
