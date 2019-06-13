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

  calculateRisk = (props) => {
    const risk = 0
    console.log("PROOOOPS", props)
    const totalPrice = props.tickets.reduce((prevPrice, nextPrice) => {
      return prevPrice + nextPrice
    })
    if (risk < 5) {
      return 5
    }

    if (risk > 95) {
      return 95
    }
  }

  totalPrice = (tickets, ticket) => {
    console.log('totalPrice being calculated')
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
    return totalPrice
  }

  render() {
    if (this.props.tickets.length > 0 && this.props.ticket.length !== 0) {
      const totalPrice = this.totalPrice(this.props.tickets, this.props.ticket)
      console.log(totalPrice)
    }

    // if (this.props.comments >= 0) {
    //   console.log('COMMENTS', this.props.comments)
    // }
    

    console.log('RISKRATE CHECK')
    return (
      <h1>Total risk: {this.risk}%</h1>

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