import * as types from '../constants';

export default function answers(state = [], action) {
  switch (action.type) {
  case types.CHOSE_ANSWER:
    let answer = {
      id: action.questionId,
      option: action.option
    };
    let index = state
      .map(question => question.id )
      .indexOf(action.questionId);
    if(index !== -1){
      return state.filter((question, i) => {
        return i !== index;
      }).concat(answer);
    }
    return [...state,answer];
  default:
    return state;
  }
}
