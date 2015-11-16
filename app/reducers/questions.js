import { REQUEST_QUESTIONS, RECEIVE_QUESTIONS } from '../constants';

const initialState = {
  isFetching: false,
  questions: []
};

export default function questions(state = initialState, action) {
  switch (action.type) {
    case REQUEST_QUESTIONS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_QUESTIONS:
      return Object.assign({}, state, {
        isFetching: false,
        questions: action.questions
      });
    default:
      return state
  }
}
