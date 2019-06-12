import { combineReducers } from 'redux'
import { EVENTS_FETCHED, EVENT_FETCHED } from '../actions';

const events = (state = [], action) => {
  switch (action.type) {
    case EVENTS_FETCHED:
      return action.payload
    default:
      return state
  }
}

export const event = (state = [], action) => {
  switch (action.type) {
    case EVENT_FETCHED:
      return action.event
    default:
      return state
  }
}

const reducer = combineReducers({ 
  events,
  event
})

export default reducer;