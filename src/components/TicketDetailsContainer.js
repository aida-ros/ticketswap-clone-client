import React from 'react';
import TicketDetails from './TicketDetails.js'
import { connect } from 'react-redux'
import { getTicket } from '../actions'

class TicketDetailsContainer extends React.Component {
  componentDidMount = () => {
    const id = this.props.match.params.id
    this.props.getTicket(id)
  }

  render() {
    return (
      <TicketDetails/>
    )
  }
}

const mapStateToProps = state => ({
  ticket: state.ticket
})

const mapDispatchToProps = {
  getTicket
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketDetailsContainer)