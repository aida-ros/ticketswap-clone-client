import { TICKET_FETCHED } from '../actions';

export const ticket = (state = [], action) => {
  switch (action.type) {
    case TICKET_FETCHED:
      return action.payload
    default:
      return state
  }
}