import request from 'superagent'

const baseUrl = 'http://localhost:4000'

// Sends log in data
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const loginSuccess = (jwt) => ({
  type: LOGIN_SUCCESS,
  payload: jwt
})

export const login = (username, password) => dispatch => {
  request
    .post(`${baseUrl}/users`)
    .send({username, password})
    .then(response => {
      console.log('RESPONSE BODY:', response.body)
      dispatch(loginSuccess(response.body.jwt))
      console.log('LOGIN DISPATCHED')
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
  console.log('ID RECEIVED:', id)
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
  console.log('DATA RECEIVED:', data)
  request
    .post(`${baseUrl}/events`)
    .send(data)
    .then(response => {
      console.log("RESPONSE BODY:", response.body)
      dispatch(eventCreateSuccess(response.body))
    })
}