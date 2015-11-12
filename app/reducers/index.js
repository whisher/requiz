import * as types from '../constants/ActionTypes';

export default function qa(state, action) {
  switch (action.type) {
  case types.CHOSE_ANSWER:
    return [...state];
  default:
    return state;
  }
}
