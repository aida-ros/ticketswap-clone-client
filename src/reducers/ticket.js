import { TICKET_FETCHED } from '../actions/tickets';

export const ticket = (state = [], action) => {
  switch (action.type) {
    case TICKET_FETCHED:
      return action.payload
    default:
      return state
  }
}