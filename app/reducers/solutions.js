import { SUBMIT_FOR_SOLUTIONS } from '../constants';

const initialState = {
  isSubmitForSolutions: false
};

export default function solutions(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_FOR_SOLUTIONS:
      return Object.assign({}, state, {
        isSubmitForSolutions: action.flag
      });
    default:
      return state
  }
}
