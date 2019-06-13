import React from "react";
import { connect } from 'react-redux'
import { getEvents, getEvent, getTicket, getTickets, getComments } from '../actions'

class RiskRate extends React.Component {
  componentWillMount = async () => {
    console.log('RISKRATE MOUNTED')
    const id = this.props.ticketId
    await this.props.getTickets()
    await this.props.getTicket(id)
    await this.props.getComments(id)
  }

  calculateRisk = (average, ticket) => {
    let risk = 0
    const price = parseInt(ticket.price)
    // console.log("PRICEEEE", price)
    // console.log("AAAAVERAGE", average)
    if (price < average) {
      const difference = average - price
      risk = risk + difference
      console.log('NEW RISK', risk)
    }

    if (risk < 5) {
      return 5
    }

    if (risk > 95) {
      return 95
    }
  }

  averagePrice = (tickets, ticket) => {
    const eventTickets = tickets.filter(currentTicket => {
      if (ticket.eventId === currentTicket.eventId) {
        parseInt(currentTicket.price)
        return currentTicket
      }
    })
    console.log('EVENT TICKETS', eventTickets)
    
    const totalPrice = eventTickets.reduce((prevTicket, nextTicket) => {
      return parseInt(prevTicket.price) + parseInt(nextTicket.price)
    })
    console.log('TOTAL PRICE', totalPrice)

    return totalPrice / eventTickets.length
  }

  render() {
    const { tickets, ticket } = this.props

    if (tickets.length > 0 && ticket.length !== 0) {
      const average = this.averagePrice(tickets, ticket)
      console.log('AVERAGE PRICE', average)
      const riskRate = this.calculateRisk(average, ticket)
      console.log('RISKRATE:', riskRate)
    }

    

    console.log('RISKRATE CHECK')
    return (
      <h1>Total risk: %</h1>

    )
  }
}

const mapStateToProps = (state) => ({
  event: state.event,
  events: state.events,
  tickets: state.tickets,
  ticket: state.ticket,
  comments: state.comments
})

const mapDispatchToProps = {
  getEvents,
  getEvent,
  getTicket,
  getTickets,
  getComments
}

export default connect(mapStateToProps, mapDispatchToProps)(RiskRate);