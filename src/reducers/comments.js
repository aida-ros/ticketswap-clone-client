import { COMMENT_ADDED, COMMENTS_FETCHED } from '../actions';

export const comments = (state = [], action) => {
  switch (action.type) {
    case COMMENTS_FETCHED:
      return action.payload
    case COMMENT_ADDED:
      return [...state, action.payload]
    default:
      return state
  }
}