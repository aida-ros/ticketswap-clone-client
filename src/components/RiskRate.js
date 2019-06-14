import React from "react";
import { connect } from 'react-redux'
import { getEvents, getEvent, getTicket, getTickets, getComments } from '../actions'

class RiskRate extends React.Component {
  componentWillMount =  () => {
    const id = this.props.ticketId
    this.props.getTickets()
    this.props.getTicket(id)
    this.props.getComments(id)
  }

  checkProps = () => {
    const { tickets, ticket } = this.props
    if (tickets.length > 0 && ticket.length !== 0) {
      const average = this.averagePrice(tickets, ticket)
      const priceRisk = this.priceRisk(average, ticket)
      console.log('FINAL PRICE RISK:', priceRisk)
      return priceRisk
    }
  }
  


  priceRisk = (average, ticket) => {
    let risk = 0
    const price = parseInt(ticket.price)
    console.log('TICKET PRICE', price)
    
    if (price < average) {
      const difference = average - price
      risk = risk + difference
      console.log('NEW RISK', risk)
    } 
    else if (price > average) {
      let difference = price - average
      console.log('DIFFERENCE', difference)
        if (difference > 10) {
          risk = risk - 10
        } else {
          risk = risk - difference
        }
      console.log('NEW RISK', risk)
      
    }

    if (risk < 5) {
      return risk = 5
    }

    if (risk > 95) {
      return risk = 95
    }
    return risk
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

    return (
      <h3>Total risk: {this.checkProps()}%</h3>

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