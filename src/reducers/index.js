import { combineReducers } from 'redux'
import { events } from './events'
import { event } from './event'
import { currentUser } from './currentUser'

const reducer = combineReducers({ 
  events,
  event,
  currentUser
})

export default reducer;