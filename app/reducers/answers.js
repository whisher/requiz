import * as types from '../constants';

export default function answers(state = [], action) {
  switch (action.type) {
  case types.CHOSE_ANSWER:
    let answer = {
      id: action.questionId,
      option: action.option
    };
    let index = state
      .map(function(answer) { return answer.id; })
      .indexOf(action.questionId);
    if(index !== -1){
      return [...state.splice(index,1, answer)];
    }
    return [...state,answer];
  default:
    return state;
  }
}
