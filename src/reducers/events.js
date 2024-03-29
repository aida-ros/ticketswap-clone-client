import { EVENTS_FETCHED } from '../actions/events';

export const events = (state = [], action) => {
  switch (action.type) {
    case EVENTS_FETCHED:
      return action.payload
    default:
      return state
  }
}