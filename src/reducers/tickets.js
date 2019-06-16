import { TICKETS_FETCHED } from '../actions/tickets';

export const tickets = (state = [], action) => {
  switch (action.type) {
    case TICKETS_FETCHED:
      return action.payload
    default:
      return state
  }
}