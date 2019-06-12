import { combineReducers } from 'redux'
import { events } from './events'
import { event } from './event'

const reducer = combineReducers({ 
  events,
  event
})

export default reducer;