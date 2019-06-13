import { combineReducers } from 'redux'
import { events } from './events'
import { event } from './event'
import { currentUser } from './currentUser'
import { tickets } from './tickets'

const reducer = combineReducers({ 
  events,
  event,
  currentUser,
  tickets
})

export default reducer;