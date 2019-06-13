import React from 'react';
import TicketDetails from './TicketDetails.js'
import { connect } from 'react-redux'
import { getEvent, getTickets } from '../actions'

class TicketDetailsContainer extends React.Component {

  render() {
    return (
      <TicketDetails/>
    )
  }
}

export default TicketDetailsContainer