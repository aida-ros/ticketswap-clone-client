import { combineReducers } from 'redux'
import { EVENTS_FETCHED } from '../actions';

const events = (state = [], action) => {
  switch (action.type) {
    case EVENTS_FETCHED:
      return action.payload
    default:
      return state
  }
}

const reducer = combineReducers({ 
  events
})

export default reducer;