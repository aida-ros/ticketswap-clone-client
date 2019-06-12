import request from 'superagent'

const baseUrl = 'http://localhost:4000'

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