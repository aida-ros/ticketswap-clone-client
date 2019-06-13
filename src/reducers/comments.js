import { COMMENT_ADDED } from '../actions';

export const comments = (state = [], action) => {
  switch (action.type) {
    case COMMENT_ADDED:
      return [...state, action.payload]
    default:
      return state
  }
}