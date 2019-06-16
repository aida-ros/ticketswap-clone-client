import { EVENT_FETCHED } from '../actions/events';

export const event = (state = [], action) => {
  switch (action.type) {
    case EVENT_FETCHED:
      return action.payload
    default:
      return state
  }
}