import { combineReducers } from 'redux'
import { events } from './events'
import { event } from './event'
import { currentUser } from './currentUser'
import { tickets } from './tickets'
import { ticket } from './ticket'
import { comments } from './comments'

const reducer = combineReducers({ 
  events,
  event,
  currentUser,
  tickets,
  ticket,
  comments
})

export default reducer;