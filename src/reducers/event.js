import { EVENT_FETCHED } from '../actions';


export const event = (state = [], action) => {
  switch (action.type) {
    case EVENT_FETCHED:
      return action.payload
    default:
      return state
  }
}