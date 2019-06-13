import request from 'superagent'

const baseUrl = 'http://localhost:4000'

// Sends log in data
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const loginSuccess = (jwt) => ({
  type: LOGIN_SUCCESS,
  payload: jwt
})

export const login = (username, password) => dispatch => {
  console.log("LOGIN FUNCTION")
  console.log()
  const name = username
  const pass = password

  request
    .post(`${baseUrl}/users`)
    .send({ username: name, password: pass })
    .then(response => {
      console.log('RESPONSE BODY:', response.body)
      dispatch(loginSuccess(response.body.jwt))
      console.log('LOGIN DISPATCHED')
    })
    .catch(console.error)
}








// export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
// const signupSuccess = (jwt) => ({
//   type: SIGNUP_SUCCESS,
//   payload: jwt
// })

export const signup = (username, password) => dispatch => {

  request
    .post(`${baseUrl}/users`)
    .send({ username, password })
    .then(response => {
      console.log('RESPONSE BODY:', response.body)
      // dispatch(signupSuccess(response.body.jwt))
      // console.log('SIGNUP DISPATCHED')
    })
    .catch(console.error)
}

// Fetches and dispatches all events
export const EVENTS_FETCHED = 'EVENTS_FETCHED'
const eventsFetched = events => ({
  type: EVENTS_FETCHED,
  payload: events
})

export const getEvents = () => (dispatch) => {
  request(`${baseUrl}/events`)
    .then(response => {
      // console.log(response.body)
      const allEvents = response.body.events
      // console.log(allEvents)
      dispatch(eventsFetched(allEvents))
    })
    .catch(console.error)
}

// Fetches and dispatches a single event
export const EVENT_FETCHED = 'EVENT_FETCHED'
const eventFetched = event => ({
  type: EVENT_FETCHED,
  payload: event
})

export const getEvent = (id) => (dispatch) => {
  console.log('EVENT ID RECEIVED:', id)
  request(`${baseUrl}/events/${id}`)
    .then(response => {
      // console.log(response.body)
      const event = response.body.event
      console.log('EVENT', event)
      dispatch(eventFetched(event))
    })
    .catch(console.error)
}

// Creates a new event
export const EVENT_CREATE_SUCCESS = 'EVENT_CREATE_SUCCESS'
const eventCreateSuccess = event => ({
  type: EVENT_CREATE_SUCCESS,
  payload: event
})

export const createEvent = (data) => (dispatch) => {
  console.log('EVENT DATA RECEIVED:', data)
  request
    .post(`${baseUrl}/events`)
    .send(data)
    .then(response => {
      console.log("RESPONSE BODY:", response.body)
      dispatch(eventCreateSuccess(response.body))
    })
}

// Fetches all tickets
export const TICKETS_FETCHED = 'TICKETS_FETCHED'
const ticketsFetched = tickets => ({
  type: TICKETS_FETCHED,
  payload: tickets
})

export const getTickets = () => (dispatch) => {
  request(`${baseUrl}/tickets`)
    .then(response => {
      console.log(response.body)
      const allTickets = response.body.tickets
      console.log(allTickets)
      dispatch(ticketsFetched(allTickets))
    })
    .catch(console.error)
}

// Fetches and dispatches single Ticket
export const TICKET_FETCHED = 'TICKET_FETCHED'
const ticketFetched = ticket => ({
  type: TICKET_FETCHED,
  payload: ticket
})

export const getTicket = (id) => (dispatch) => {
  console.log('TICKET ID RECEIVED:', id)
  request(`${baseUrl}/events/tickets/${id}`)
    .then(response => {
      // console.log(response.body)
      const ticket = response.body.ticket
      console.log('TICKET', ticket)
      dispatch(ticketFetched(ticket))
    })
    .catch(console.error)
}

export const COMMENT_ADDED = 'COMMENT_ADDED'
const commentAdded = comment => ({
  type: COMMENT_ADDED,
  payload: comment
})

export const addComment = (contents) => dispatch => {
  console.log('COMMENT RECEIVED:', contents.comment)
  request
    .post(`${baseUrl}/comments`)
    .send(contents)
    .then(response => {
      console.log('COMMENT RESPONSE.BODY:', response.body)
      dispatch(commentAdded(contents.comment))
      console.log('DISPATCHED COMMENT:', contents.comment)
    })
}

export const COMMENTS_FETCHED = 'COMMENTS_FETCHED'
const commentsFetched = comments => ({
  type: COMMENTS_FETCHED,
  payload: comments
})

export const getComments = (id) => (dispatch) => {
  request(`${baseUrl}/comments/${id}`)
    .then(response => {
      console.log('FETCH COMMENTS RESPONSE.BODY:', response.body)
      const comments = response.body.comments
      dispatch(commentsFetched(comments))
    })
    .catch(console.error)
}