import request from 'superagent'
const baseUrl = 'http://localhost:4000'

// Fetches all tickets
export const TICKETS_FETCHED = 'TICKETS_FETCHED'
const ticketsFetched = tickets => ({
  type: TICKETS_FETCHED,
  payload: tickets
})

export const getTickets = () => (dispatch) => {
  request(`${baseUrl}/tickets`)
    .then(response => {
      const allTickets = response.body.tickets
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

export const RISK_CALCULATED = 'RISK_CALCULATED'
const riskCalculated = riskRate => ({
  type: RISK_CALCULATED,
  payload: riskRate
})

export const getTicket = (id) => (dispatch) => {
  request(`${baseUrl}/events/tickets/${id}`)
    .then(response => {
      console.log('VERRRRY IMPORTANTE', response.body)
      const ticket = response.body.ticket
      const riskRate = response.body.riskRate
      dispatch(ticketFetched(ticket))
      dispatch(riskCalculated(riskRate))
    })
    .catch(console.error)
}

export const TICKET_CREATE_SUCCESS = 'TICKET_CREATE_SUCCESS'
const ticketCreateSuccess = ticket => ({
  type: TICKET_CREATE_SUCCESS,
  payload: ticket
})

export const createTicket = (data) => (dispatch) => {
  console.log('TICKET DATA RECEIVED:', data)
  request
    .post(`${baseUrl}/tickets`)
    .send(data)
    .then(response => {
      console.log("RESPONSE BODY:", response.body)
      dispatch(ticketCreateSuccess(response.body))
    })
}